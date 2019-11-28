import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";
import { SharedService } from "./services/shared.service";
import { ProductService } from "./services/product.service";
import { IProduct } from "./models/product";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  Event,
  NavigationError,
  NavigationCancel
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  private currentUser: string;
  private cartItemCount: number = 0;
  private productAddedToCart: IProduct[];
  private showLoaddingIndicator: boolean = true;

  constructor(
    private authService: AuthenticationService,
    private sharedService: SharedService,
    private productService: ProductService,
    private router: Router
  ) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoaddingIndicator = true;
      }

      if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel
      ) {
        this.showLoaddingIndicator = false;
      }
    });
  }

  ngOnInit() {
    // Dynamically change the product count in the cart
    this.sharedService.currentMessage.subscribe(msg => {
      this.cartItemCount = msg;
    });

    // Update the cart count
    this.productAddedToCart = this.productService.getProductFromCart();
    if (this.productAddedToCart == null) {
      this.cartItemCount = 0;
    } else {
      this.cartItemCount = this.productService.getProductFromCart().length;
    }
  }

  // This call from the HTML
  logoutUser() {
    this.authService.logoutUser();
    this.router.navigate(["/products"]);
  }
}
