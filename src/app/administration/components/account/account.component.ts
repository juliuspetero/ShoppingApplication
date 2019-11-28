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
  private showLoaddingIndicator: boolean = false;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.showLoaddingIndicator = true;
    this.accountService.getAccountDetailsById().subscribe(
      response => {
        if (response == null) {
          this.errorMessage = "There is problem retrieving the account details";
        }
        this.accountDetails = response;

        this.showLoaddingIndicator = false;
      },
      error => {
        this.errorMessage = error.message;
        this.showLoaddingIndicator = false;
      }
    );
  }

  updateAccountDetails(): void {
    this.showLoaddingIndicator = true;
    this.accountService.updateAccountDetails().subscribe(
      response => {
        if (response == null) {
          this.errorMessage = "There is problem retrieving the account details";
        }
        this.ngOnInit();
        this.accountDetails = response;
        this.showLoaddingIndicator = false;
      },
      error => {
        this.errorMessage = error.message;
        this.showLoaddingIndicator = false;
      }
    );
  }
}
