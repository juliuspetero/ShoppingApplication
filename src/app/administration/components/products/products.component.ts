import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  private products: IProduct[];
  private errorMessage: string;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  editProduct(product: IProduct): void {}

  removeProduct(product: IProduct): void {}
}
