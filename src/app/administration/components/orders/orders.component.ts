import { Component, OnInit } from "@angular/core";
import { IOrder } from "src/app/administration/models/order";
import { OrderService } from "src/app/administration/services/order.service";
import { IProduct } from "src/app/models/product";
import { Router } from "@angular/router";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit {
  private orders: any[] = [];
  private errorMessage: string;
  private orderProducts: IProduct[];
  private showLoaddingIndicator: boolean = false;

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.showLoaddingIndicator = true;
    this.orderService.getAllOrders().subscribe(
      response => {
        this.orders = response;
        for (let i in this.orders) {
          this.orders[i].orderProducts = JSON.parse(
            this.orders[i].orderProducts
          );
        }
        this.showLoaddingIndicator = false;
      },
      error => {
        this.errorMessage = error.message;
        this.showLoaddingIndicator = false;
      }
    );
  }

  updatePaymentStatus(orderId: string): void {
    this.showLoaddingIndicator = true;
    this.orderService.checkOrderPaymentStatus(orderId).subscribe(
      response => {
        // console.log(response);
        this.ngOnInit();
        this.showLoaddingIndicator = false;
      },
      error => {
        this.errorMessage = error.message;
        this.showLoaddingIndicator = false;
      }
    );
  }
}
