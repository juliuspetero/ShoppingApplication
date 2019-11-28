import { Component, OnInit } from "@angular/core";
import { PaymentProviderService } from "../../services/payment-provider.service";
import { IPaymentProvider } from "../../models/payment-provider";

@Component({
  selector: "app-payment-providers",
  templateUrl: "./payment-providers.component.html",
  styleUrls: ["./payment-providers.component.css"]
})
export class PaymentProvidersComponent implements OnInit {
  private paymentProviders: IPaymentProvider[] = [];
  private errorMessage: string;
  private showLoaddingIndicator: boolean = false;

  constructor(private paymentProvidersService: PaymentProviderService) {}

  ngOnInit() {
    this.showLoaddingIndicator = true;
    this.paymentProvidersService.getAllPaymentProviders().subscribe(
      response => {
        if (response == null) {
          this.errorMessage =
            "There is problem retrieving the payment providers";
        }
        this.paymentProviders = response;

        this.showLoaddingIndicator = false;
      },
      error => {
        this.errorMessage = error.message;
        this.showLoaddingIndicator = false;
      }
    );
  }

  updatePaymentProviders(): void {
    this.showLoaddingIndicator = true;
    this.paymentProvidersService.updateAllPaymentProviders().subscribe(
      response => {
        if (response == null) {
          this.errorMessage =
            "There is problem retrieving the payment providers";
        }
        this.ngOnInit();
        this.paymentProviders = response;
        this.showLoaddingIndicator = false;
      },
      error => {
        this.errorMessage = error.message;
        this.showLoaddingIndicator = false;
      }
    );
  }
}
