import { Injectable } from "@angular/core";
import { IProduct } from "../models/product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private products: IProduct[];

  constructor() {
    //#region hardcoded list of products
    this.products = [
      {
        id: "p01",
        name: "name 1",
        price: 100,
        photo: "thumb1.gif",
        description: "Et harum quidem rerum facilis est et expedita distinctio"
      },
      {
        id: "p02",
        name: "name 2",
        price: 200,
        photo: "thumb2.gif",
        description: "Et harum quidem rerum facilis est et expedita distinctio",
        quantity: 2
      },
      {
        id: "p03",
        name: "name 3",
        price: 300,
        photo: "thumb3.gif",
        description: "Et harum quidem rerum facilis est et expedita distinctio",
        quantity: 2
      }
    ];
    //#endregion
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: string): IProduct {
    return this.products.find(p => p.id == id);
  }

  // A cart is an array of products which is stored in a local storage
  addProductToCart(product: IProduct[]): void {
    localStorage.setItem("cart", JSON.stringify(product));
  }

  getProductFromCart(): IProduct[] {
    return JSON.parse(localStorage.getItem("cart"));
  }

  // Remove all the product saved in the cart
  removeAllProductFromCart() {
    return localStorage.removeItem("cart");
  }

  calculateTotalCost(): number {
    let total = 0;
    const allProducts: IProduct[] = this.getProductFromCart();
    if (allProducts != null) {
      for (let i in allProducts) {
        total = total + allProducts[i].quantity * allProducts[i].price;
      }
    }
    return total;
  }
}
