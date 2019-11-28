import { Injectable } from "@angular/core";
import { SharedService } from "src/app/services/shared.service";
import { IOrder } from "src/app/administration/models/order";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  private orderUrl: string = `${SharedService.baseUrl}/orders`;
  private orders: IOrder[];

  constructor(private http: HttpClient) {}

  // Fetch all orders made by a particular user
  getAllOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.orderUrl);
  }

  getNumberofOrders(): Observable<any> {
    return this.http.get<any>(`${this.orderUrl}/count`);
  }

  checkOrderPaymentStatus(orderId: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.orderUrl}/transactionstatus/${orderId}`
    );
  }
}
