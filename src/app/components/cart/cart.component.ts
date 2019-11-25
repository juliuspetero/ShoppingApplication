import { Component, OnInit, OnChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ProductService } from "src/app/services/product.service";
import { IProduct } from "src/app/models/product";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit, OnChanges {
  private productsAddedToCart: IProduct[];
  public totalCost: number;
  private cartItemCount;

  constructor(
    private productService: ProductService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.productsAddedToCart = this.productService.getProductFromCart();

    if (this.productsAddedToCart != null) {
      // Update the cart count
      this.cartItemCount = this.productsAddedToCart.length;
      this.sharedService.updateCartCount(this.cartItemCount);

      this.totalCost = this.productService.calculateTotalCost();
    }
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.sharedService.updateCartCount(this.cartItemCount);
  }

  onAddQuantity(product: IProduct): void {
    this.productsAddedToCart = this.productService.getProductFromCart();
    this.productsAddedToCart.find(p => p.id == product.id).quantity =
      product.quantity + 1;

    // Remove all the previous record
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productsAddedToCart);
    this.totalCost = this.productService.calculateTotalCost();
  }

  onRemoveQuantity(product: IProduct): void {
    this.productsAddedToCart = this.productService.getProductFromCart();

    const requiredProduct = this.productsAddedToCart.find(
      p => p.id == product.id
    );

    if (requiredProduct.quantity > 1) {
      requiredProduct.quantity = product.quantity - 1;
    }

    // Remove all the previous record
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productsAddedToCart);
    this.totalCost = this.productService.calculateTotalCost();
    // console.log(requiredProduct);
  }

  removeFromCart(product: IProduct): void {
    this.productsAddedToCart = this.productsAddedToCart.filter(
      p => p.id != product.id
    );
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productsAddedToCart);
    this.productService.calculateTotalCost();

    this.cartItemCount = this.productsAddedToCart.length;
    this.sharedService.updateCartCount(this.cartItemCount);
  }
}
