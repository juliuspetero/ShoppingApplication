import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  private newProduct: IProduct = {} as IProduct;

  constructor() {}

  ngOnInit() {}
}
