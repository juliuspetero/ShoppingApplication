import { Injectable } from "@angular/core";
import { IAccountDetails } from "../models/account-details";
import { HttpClient } from "@angular/common/http";
import { SharedService } from "src/app/services/shared.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  private accountUrl: string = `${SharedService.baseUrl}/transactions/accountid`;
  private updateAccountUrl: string = `${SharedService.baseUrl}/transactions/updateaccount`;

  constructor(private http: HttpClient) {}

  // Make API call to the backend from the local db
  getAccountDetailsById(): Observable<IAccountDetails> {
    return this.http.get<IAccountDetails>(
      `${this.accountUrl}/${SharedService.accountId}`
    );
  }

  // Make API call to Xente Payment API to update the current account standing
  updateAccountDetails(): Observable<IAccountDetails> {
    return this.http.get<IAccountDetails>(
      `${this.updateAccountUrl}/${SharedService.accountId}`
    );
  }
}
