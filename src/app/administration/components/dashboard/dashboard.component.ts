import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/administration/services/order.service";
import { IOrder } from "src/app/administration/models/order";
import { ITransaction } from "../../models/transaction";
import { TransactionService } from "../../services/transaction.service";
import { IUser } from "src/app/administration/models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  // Orders
  private orders: IOrder[];
  private numberOfOrders: number;

  // Users
  private users: IUser[];
  private numberOfUsers: number;

  // Transactions
  private transactions: ITransaction[];
  private numberOfTransactions: number;

  // New Users
  private newUsers: IUser[];
  private numberOfNewUsers: number;

  // Sales

  private errorMessage: string;

  constructor(
    private orderService: OrderService,
    private transactionService: TransactionService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.calculateTotalOrders();
    this.calculateTotalTransactions();
    this.calculateTotalUsers();
    this.calculateTotalNewUsers();
  }

  calculateTotalTransactions(): void {
    this.transactions = this.transactionService.getAllTransactions();
    if (this.transactions == null) {
      this.errorMessage = "Failed to get transactions from the API";
    }

    this.numberOfTransactions = this.transactions.length;
  }

  calculateTotalOrders(): void {
    this.orders = this.orderService.getAllOrders();
    if (this.orders == null) {
      this.errorMessage = "No one has place place order yet!";
    }
    this.numberOfOrders = this.orders.length;
  }

  calculateTotalUsers(): void {
    this.users = this.userService.getAllUsers();
    if (this.users == null) {
      this.errorMessage = "No user to display!";
    }

    this.numberOfUsers = this.users.length;
  }
  calculateTotalSales(): void {}

  calculateTotalNewUsers(): void {
    this.newUsers = this.userService.getAllUsers();
    if (this.newUsers == null) {
      this.errorMessage = "No user to display!";
    }

    this.numberOfNewUsers = this.newUsers.length;
  }
}
