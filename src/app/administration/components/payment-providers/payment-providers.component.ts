import { Component, OnInit } from "@angular/core";
import { PaymentProviderService } from "../../services/payment-provider.service";
import { IPaymentProvider } from "../../models/payment-provider";

@Component({
  selector: "app-payment-providers",
  templateUrl: "./payment-providers.component.html",
  styleUrls: ["./payment-providers.component.css"]
})
export class PaymentProvidersComponent implements OnInit {
  private errorMessage: string;
  private paymentProviders: IPaymentProvider[];

  constructor(private paymentProviderService: PaymentProviderService) {}

  ngOnInit() {
    this.paymentProviders = this.paymentProviderService.getAllPaymentProviders();
    if (this.paymentProviders == null) {
      this.errorMessage = "There is problem retrieving all payment providers";
    }
  }
}
