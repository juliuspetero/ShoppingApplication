import { Component, OnInit } from "@angular/core";
import { IOrder } from "src/app/administration/models/order";
import { OrderService } from "src/app/administration/services/order.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit {
  private orders: IOrder[];

  private errorMessage: string;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.getAllOrders();
    if (this.orders == null) {
      this.errorMessage = "No one has place place order yet!";
    }
  }

  refreshPaymentStatus(orderId: string): void {
    this.orders.find(
      o => o.id == orderId
    ).paymentStatus = this.orderService.updateOrderPaymentStatus(orderId);
  }
}
