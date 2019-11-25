import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  private products: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }
}
