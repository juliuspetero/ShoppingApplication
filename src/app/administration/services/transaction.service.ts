import { Injectable } from "@angular/core";
import { SharedService } from "src/app/services/shared.service";
import { ITransaction } from "../models/transaction";
import { HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TransactionService {
  private transactionUrl: string = `${SharedService.baseUrl}/transaction`;

  constructor(private http: HttpClientModule) {}

  //#region  Get transactions
  getAllTransactions(): ITransaction[] {
    return [
      {
        id: "1",
        userId: "user1",
        requestId: "req1",
        createdOn: "2019-08-23T12:42:41.4048704",
        status: "PROCESSING",
        batchId: "Batch1",
        amount: 5000,
        paymentProvider: "MTN",
        message: "Payment for order1",
        userEmail: "john@gmail.com",
        orderId: "order1"
      },
      {
        id: "2",
        userId: "user2",
        requestId: "req2",
        createdOn: "2019-08-20T12:42:41.4048704",
        status: "COMMITTED",
        batchId: "Batch1",
        amount: 8000,
        paymentProvider: "AIRTEL",
        message: "Payment for order2",
        userEmail: "fred@gmail.com",
        orderId: "order2"
      }
    ];
  }

  //#endregion
}
