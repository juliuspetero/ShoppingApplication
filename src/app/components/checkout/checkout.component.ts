import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { IProduct } from "src/app/models/product";
import { IOrder } from "src/app/models/order";
import { SharedService } from "src/app/services/shared.service";
import { OrderService } from "src/app/services/order.service";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  Event
} from "@angular/router";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
  private productsAddedToCart: IProduct[];
  private errorMessage: string;
  private orderRequest: IOrder = {
    phone: this.sharedService.getUserDetails().phone,
    email: this.sharedService.getUserDetails().email
  } as IOrder;
  private totalCost: number;
  private cartItemCount: number;
  private showLoaddingIndicator: boolean = true;

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private sharedService: SharedService,
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
    this.productsAddedToCart = this.productService.getProductFromCart();
    this.totalCost = this.productService.calculateTotalCost();
    this.cartItemCount = this.productsAddedToCart.length;
    this.sharedService.updateCartCount(this.cartItemCount);
    this.orderRequest.applicationMode = "sandbox";

    if (this.productsAddedToCart.length == 0) {
      this.errorMessage = "You have not added any product to your cart yet";
    }
  }

  checkout(request: IOrder): void {
    this.showLoaddingIndicator = true;
    if (
      request.phone.startsWith("25678") ||
      request.phone.startsWith("25677") ||
      request.phone.startsWith("25675") ||
      request.phone.startsWith("25670")
    ) {
      request.orderProducts = this.productsAddedToCart;
      request.totalAmount = this.totalCost;
      this.orderService.placeOrder(request).subscribe(
        response => {
          // console.log(response);
          this.router.navigate(["/orders"]);
        },
        error => {
          this.errorMessage = error.message;
          this.showLoaddingIndicator = false;
        }
      );
    } else {
      this.errorMessage = "Enter a supported phone number";
      this.showLoaddingIndicator = false;
    }
  }
}
