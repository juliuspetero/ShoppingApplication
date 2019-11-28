import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  private productId: string;
  private product: IProduct;
  private productsAddedToCart: IProduct[];
  private statusMessage: string;
  private errorMessage: string;
  private cartItemCount: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params["id"];
    // this.activatedRoute.snapshot.component
    this.product = this.productService.getProductById(this.productId);
  }

  // This is called when a user wants to add a product to his cart
  OnAddToCart(selectedProduct: IProduct): void {
    // Set the default quantity to one
    selectedProduct.quantity = 1;
    // Get all the products currently present in the cart
    this.productsAddedToCart = this.productService.getProductFromCart();
    if (this.productsAddedToCart == null) {
      this.productsAddedToCart = [];
      this.productsAddedToCart.push(selectedProduct);

      // Add the first product to cart
      this.productService.addProductToCart(this.productsAddedToCart);
      this.statusMessage = "Product added to to the cart";
      this.errorMessage = "";

      // There are some products already in the cart
    } else {
      const productTobeAdded = this.productsAddedToCart.find(
        p => p.id == selectedProduct.id
      );

      if (productTobeAdded == null) {
        this.productsAddedToCart.push(selectedProduct);
        this.productService.addProductToCart(this.productsAddedToCart);
        this.statusMessage = "Product added to to the cart";
        this.errorMessage = "";
      } else {
        this.errorMessage = "Product already exists in the cart";
        this.statusMessage = "";
      }
    }

    this.cartItemCount = this.productsAddedToCart.length;
    // console.log(this.cartItemCount);
    // this.cartEvent.emit(this.cartItemCount);
    this.sharedService.updateCartCount(this.cartItemCount);
  }
}
