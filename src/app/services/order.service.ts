import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IOrder } from "../models/order";
import { Observable } from "rxjs";
import { SharedService } from "./shared.service";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  private paymenUrl: string = `${SharedService.baseUrl}/order/paymentstatus`;
  private orderUrl: string = "http:localhost:3000/api/order/paymentstatus";
  private myOrders: IOrder[];

  constructor(private http: HttpClient) {}

  // Place order for items stored in the cart
  placeOrder(orderRequest: IOrder): Observable<any> {
    return this.http.post<IOrder>(this.orderUrl, orderRequest);
  }

  // Fetch all orders made by a particular user
  getAllUserOrders(): IOrder[] {
    //#region Array of a user orders
    this.myOrders = [
      {
        id: "1",
        totalAmount: 5000,
        applicationMode: "sandbox",
        phone: "2567838738464",
        email: "john@gmail.com",
        // This is retrieved from the cart
        oderProducts: [
          {
            id: "p01",
            name: "name 1",
            price: 100,
            photo: "thumb1.gif",
            description:
              "Et harum quidem rerum facilis est et expedita distinctio",
            quantity: 2
          },
          {
            id: "p02",
            name: "name 2",
            price: 200,
            photo: "thumb2.gif",
            description:
              "Et harum quidem rerum facilis est et expedita distinctio",
            quantity: 3
          }
        ],
        deliveryAddress: "Naalya Rd",
        deliveryStatus: "On the way",
        paymentStatus: "Processing",
        placedOn: new Date().toString()
      },
      {
        id: "1",
        totalAmount: 5000,
        applicationMode: "sandbox",
        phone: "2567838738464",
        email: "john@gmail.com",
        // This is retrieved from the cart
        oderProducts: [
          {
            id: "p01",
            name: "name 1",
            price: 100,
            photo: "thumb1.gif",
            description:
              "Et harum quidem rerum facilis est et expedita distinctio",
            quantity: 2
          },
          {
            id: "p02",
            name: "name 2",
            price: 200,
            photo: "thumb2.gif",
            description:
              "Et harum quidem rerum facilis est et expedita distinctio",
            quantity: 3
          }
        ],
        deliveryAddress: "Naalya Rd",
        deliveryStatus: "On the way",
        paymentStatus: "Committed",
        placedOn: new Date().toString()
      }
    ];
    //#endregion

    return this.myOrders;
    // return this.http.get<IOrder[]>(this.orderUrl);
  }

  checkOrderPaymentStatus(orderId: string): string {
    return "COMMITTED";
  }

  // checkOrderPaymentStatus(orderId: string): Observable<any> {
  //   return this.http.get<any>(`${this.orderUrl}?orderId=${orderId}`);
  // }
}
