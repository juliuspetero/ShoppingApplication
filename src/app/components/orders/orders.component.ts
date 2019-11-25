import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/services/order.service";
import { IOrder } from "src/app/models/order";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit {
  private userOrders: IOrder[];
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.userOrders = this.orderService.getAllUserOrders();
  }

  updatePaymentStatus(orderId: string): void {
    const updatedPaymentStatus = this.orderService.checkOrderPaymentStatus(
      orderId
    );
    this.userOrders.find(
      o => (o.id = orderId)
    ).paymentStatus = updatedPaymentStatus;
  }
}
