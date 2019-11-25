import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";
import { SharedService } from "./services/shared.service";
import { ProductService } from "./services/product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(
    private authService: AuthenticationService,
    private sharedService: SharedService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Dynamically change the product count in the cart
    this.sharedService.currentMessage.subscribe(msg => {
      this.cartItemCount = msg;
    });

    this.cartItemCount = this.productService.getProductFromCart().length;
  }
}
