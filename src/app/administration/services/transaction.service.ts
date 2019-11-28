import { Injectable } from "@angular/core";
import { SharedService } from "src/app/services/shared.service";
import { ITransaction } from "../models/transaction";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TransactionService {
  private transactionUrl: string = `${SharedService.baseUrl}/transactions`;

  constructor(private http: HttpClient) {}

  //#region  Get transactions
  getAllTransactions(): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(this.transactionUrl);
  }
  //#endregion

  getTransactionsDetailsByTransactionId(
    transactionId: string
  ): Observable<ITransaction> {
    return this.http.get<ITransaction>(
      `${this.transactionUrl}/transactionid/${transactionId}`
    );
  }

  getTransactionsDetailsByRequestId(
    requestId: string
  ): Observable<ITransaction> {
    return this.http.get<ITransaction>(
      `${this.transactionUrl}/requestid/${requestId}`
    );
  }

  // Get the number of transactions
  getNumberOfTransactions(): Observable<any> {
    return this.http.get<any>(`${this.transactionUrl}/count`);
  }
}
