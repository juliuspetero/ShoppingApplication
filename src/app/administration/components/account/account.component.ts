import { Component, OnInit } from "@angular/core";
import { IAccountDetails } from "src/app/administration/models/account-details";
import { AccountService } from "../../services/account.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  private accountDetails: IAccountDetails;
  private errorMessage: string;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountDetails = this.accountService.getAccountDetailsById();
    if (this.accountDetails == null) {
      this.errorMessage = "There is problem retrieving the account details";
    }
  }
}
