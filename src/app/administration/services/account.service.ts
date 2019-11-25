import { Injectable } from "@angular/core";
import { IAccountDetails } from "../models/account-details";
import { HttpClientModule } from "@angular/common/http";
import { SharedService } from "src/app/services/shared.service";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  private accountUrl: string = `${SharedService.baseUrl}/account`;

  constructor(private http: HttpClientModule) {}

  // Make API call to the backend from the local db
  getAccountDetailsById(): IAccountDetails {
    return {
      createdOn: "2019-08-23T12:42:41.4048704",
      modifiedOn: "2019-11-18T14:59:30.7658326",
      accountId: "256784378515",
      subscriptionId: "BEECF52E552B4F1A83E0904ED098FC62V2",
      accountType: "PAYMENT_COLLECTION",
      currencyCode: "UGX",
      countryCode: "256",
      accountStatus: "ACTIVE",
      name: "Demo05",
      shortDescription: "Demo",
      longDescription: "Demo",
      alertLevel: "ERRORS",
      alertChannel: "EMAIL",
      alertEmailAddress: "someone@gmail.com",
      alertPhoneNumber: "256784378515",
      callBackUri:
        "https://democallback.free.beeceptor.com/api/xente/testcallback",
      balance: 0.0,
      accountPackage: "BUSINESS"
    };
  }

  // Make API call to Xente Payment API
  updateAccountDetails() {
    // Code here
  }
}
