import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  // Dynamic cart count
  private currentCartCount = new BehaviorSubject(0);
  public currentMessage = this.currentCartCount.asObservable();

  // Base Url for local host
  public static baseUrl: string = "http://localhost:3000/api";

  // Base Url for deployed application in heroku
  // public static baseUrl: string = "http:localhost:3000/api";

  public static accountId: string = "256784378515";

  constructor() {}

  // Update the number of items already present in the cart
  updateCartCount(count: number): void {
    this.currentCartCount.next(count);
  }

  getUserDetails(): IUser {
    if (localStorage.getItem("user") == null) {
      return null;
    } else {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
}
