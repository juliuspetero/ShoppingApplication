import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IOrder } from "../models/order";
import { Observable } from "rxjs";
import { SharedService } from "./shared.service";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  private orderUrl: string = `${SharedService.baseUrl}/orders`;
  private myOrders: IOrder[];

  constructor(private http: HttpClient) {}

  // Place order for items stored in the cart
  placeOrder(orderRequest: IOrder): Observable<any> {
    return this.http.post<IOrder>(this.orderUrl, orderRequest);
  }

  // Fetch all orders made by a particular user
  getAllUserOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.orderUrl}/userorders`);
  }

  checkOrderPaymentStatus(orderId: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.orderUrl}/transactionstatus/${orderId}`
    );
  }
}
