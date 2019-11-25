import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  private currentCartCount = new BehaviorSubject(0);
  public currentMessage = this.currentCartCount.asObservable();

  // Base Url
  public static baseUrl: string = "http:localhost:3000/api";

  constructor() {}

  // Update the number of items already present in the cart
  updateCartCount(count: number) {
    this.currentCartCount.next(count);
  }
}
