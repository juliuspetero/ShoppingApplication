import { Injectable } from "@angular/core";
import { IPaymentProvider } from "../models/payment-provider";
import { SharedService } from "src/app/services/shared.service";
import { HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PaymentProviderService {
  private paymentProvidersUrl: string = `${SharedService.baseUrl}/paymentproviders`;

  constructor(private http: HttpClientModule) {}

  //#region  Retrieve an array of payment providers at Xente
  getAllPaymentProviders(): IPaymentProvider[] {
    return [
      {
        paymentItemId: "AIRTELMONEYUG",
        name: "Mobile Money",
        category: "MOBILEMONEY",
        paymentRegex: "^(2567|07|2562|02)[0|5](\\\\d{7})",
        paymentRegexStart: "^(2567|07|2562|02)[0|5](\\\\d{0,7})",
        paymentId: "MOBILEMONEYUG",
        isDeleted: false,
        isActive: true,
        longDescription: "Airtel Money Uganda",
        shortDescription: "Airtel Money Uganda",
        imageUri: null
      },
      {
        paymentItemId: "MTNMOBILEMONEYUG",
        name: "Mobile Money",
        category: "MOBILEMONEY",
        paymentRegex: "^(2567|07|2563|03)[7|8](\\\\d{7})",
        paymentRegexStart: "^(2567|07|2563|03)[7|8](\\\\d{0,7})",
        paymentId: "MOBILEMONEYUG",
        isDeleted: false,
        isActive: true,
        longDescription: "MTN Money Uganda",
        shortDescription: "MTN Money Uganda",
        imageUri: null
      }
    ];
  }

  //#endregion
}
