import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { IProduct } from "src/app/models/product";
import { IOrder } from "src/app/models/order";
import { SharedService } from "src/app/services/shared.service";
import { OrderService } from "src/app/services/order.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
  private productsAddedToCart: IProduct[];
  private errorMessage: string;
  private orderRequest: IOrder = {} as IOrder;

  private statusMessage: string;
  private totalCost: number;
  private cartItemCount: number;

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productsAddedToCart = this.productService.getProductFromCart();
    this.totalCost = this.productService.calculateTotalCost();
    this.cartItemCount = this.productsAddedToCart.length;
    this.sharedService.updateCartCount(this.cartItemCount);
    this.orderRequest.applicationMode = "production";

    if (this.productsAddedToCart.length == 0) {
      this.errorMessage = "You have not added any product to your cart yet";
    }
  }

  checkout(request: IOrder): void {
    request.oderProducts = this.productsAddedToCart;
    request.totalAmount = this.totalCost;
    this.router.navigate(["/orders"]);

    // this.orderService.placeOrder(request).subscribe(
    //   response => {
    //     this.router.navigate(["/orders"]);
    //     this.statusMessage = response;
    //   },
    //   error => {
    //     this.errorMessage = error.message;
    //   }
    // );
  }
}
