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

  private errorMessage: string;

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactions = this.transactionService.getAllTransactions();
    if (this.transactions == null) {
      this.errorMessage = "Failed to get transactions from the API";
    }
  }

  getTransactionDetails(transactionId: string): void {
    console.log(transactionId);
  }
}
