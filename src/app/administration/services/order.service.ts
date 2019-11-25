import { Injectable } from "@angular/core";
import { SharedService } from "src/app/services/shared.service";
import { IOrder } from "src/app/administration/models/order";
import { HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  private orderUrl: string = `${SharedService.baseUrl}/orders`;
  private orders: IOrder[];

  constructor(private http: HttpClientModule) {}

  // Fetch all orders made by a particular user
  getAllOrders(): IOrder[] {
    //#region Array of a user orders
    this.orders = [
      {
        id: "1",
        totalAmount: 5000,
        applicationMode: "sandbox",
        phone: "2567838738464",
        email: "john@gmail.com",
        userId: "user1",
        orderProducts: [
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
        id: "2",
        totalAmount: 5000,
        applicationMode: "sandbox",
        phone: "2567838738464",
        email: "john@gmail.com",
        userId: "user2",
        // This is retrieved from the cart
        orderProducts: [
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

    return this.orders;
    // return this.http.get<IOrder[]>(this.orderUrl);
  }

  updateOrderPaymentStatus(orderId: string): string {
    return "FAILED";
  }
}
