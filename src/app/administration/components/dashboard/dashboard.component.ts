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
  private numberOfOrders: number;

  // Users
  private numberOfUsers: number;

  // Transactions
  private numberOfTransactions: number;
  private numberOfSuccessfulTransactions: number;
  private numberOfFailedTransactions: number;
  private numberOfPendingTransactions: number;

  // New Users
  private numberOfNewUsers: number;

  // Sales

  private errorMessage: string;

  constructor(
    private orderService: OrderService,
    private transactionService: TransactionService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.calculateTotalNumberOfOrders();
    this.calculateTotalNumberOfTransactions();
    this.calculateTotalNumberOfUsers();
    this.calculateTotalNumberOfTransactionsStatus();
  }

  calculateTotalNumberOfTransactions(): void {
    this.transactionService.getNumberOfTransactions().subscribe(
      response => {
        this.numberOfTransactions = response.count;
      },
      error => {
        this.errorMessage = error.message;
      }
    );
  }

  calculateTotalNumberOfTransactionsStatus(): void {
    this.transactionService.getAllTransactions().subscribe(
      response => {
        this.numberOfSuccessfulTransactions = response.filter(
          t => t.status == "COMMITTED"
        ).length;
        this.numberOfFailedTransactions = response.filter(
          t => t.status == "FAILED"
        ).length;
        this.numberOfPendingTransactions = response.filter(
          t => t.status == "PROCESSING"
        ).length;
      },
      error => {
        this.errorMessage = error.message;
      }
    );
  }

  calculateTotalNumberOfOrders(): void {
    this.orderService.getNumberofOrders().subscribe(
      response => {
        this.numberOfOrders = response.count;
      },
      error => {
        console.log(error);
        this.errorMessage = error.message;
      }
    );
  }

  calculateTotalNumberOfUsers(): void {
    this.userService.getNumberOfUsers().subscribe(
      response => {
        this.numberOfUsers = response.count;
        this.numberOfNewUsers = response.count;
      },
      error => {
        this.errorMessage = error.message;
      }
    );
  }
}
