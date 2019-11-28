import { Component, OnInit } from "@angular/core";
import { ITransaction } from "../../models/transaction";
import { TransactionService } from "../../services/transaction.service";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"]
})
export class TransactionsComponent implements OnInit {
  private transactions: ITransaction[];
  private showLoaddingIndicator: boolean = false;
  private errorMessage: string;

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.showLoaddingIndicator = true;
    this.transactionService.getAllTransactions().subscribe(
      response => {
        if (response == null) {
          this.errorMessage = "Failed to get transactions from the API";
        } else {
          this.transactions = response;
          this.showLoaddingIndicator = false;
        }
      },
      error => {
        this.errorMessage = error.message;
        this.showLoaddingIndicator = false;
      }
    );
  }

  // this.showLoaddingIndicator = true;
  // this.orderService.checkOrderPaymentStatus(orderId).subscribe(
  //   response => {
  //     console.log(response);
  //     this.ngOnInit();
  //     this.showLoaddingIndicator = false;
  //   },
  // error => {
  //   this.errorMessage = error.message;
  //   this.showLoaddingIndicator = false;
  // }
  // );

  updatePaymentStatusByTransactionId(transactionId: string) {
    this.showLoaddingIndicator = true;
    this.transactionService
      .getTransactionsDetailsByTransactionId(transactionId)
      .subscribe(
        response => {
          if (response == null) {
            this.errorMessage = "Failed to get transactions from the API";
          } else {
            // Reload ngOnInit
            console.log(response);
            this.ngOnInit();
            this.showLoaddingIndicator = false;
          }
        },
        error => {
          this.errorMessage = error.message;
          this.showLoaddingIndicator = false;
        }
      );
  }

  updatePaymentStatusByRequestId(requestId: string) {
    this.showLoaddingIndicator = true;
    this.transactionService
      .getTransactionsDetailsByRequestId(requestId)
      .subscribe(
        response => {
          if (response == null) {
            this.errorMessage = "Failed to get transactions from the API";
          } else {
            // Reload ngOnInit
            console.log(response);
            this.ngOnInit();
            this.showLoaddingIndicator = false;
          }
        },
        error => {
          this.errorMessage = error.message;
          this.showLoaddingIndicator = false;
        }
      );
  }
}
