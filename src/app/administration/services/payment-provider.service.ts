import { Injectable } from "@angular/core";
import { IPaymentProvider } from "../models/payment-provider";
import { SharedService } from "src/app/services/shared.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PaymentProviderService {
  private paymentProvidersUrl: string = `${SharedService.baseUrl}/transactions/paymentproviders`;
  private updatePaymentProvidersUrl: string = `${SharedService.baseUrl}/transactions/updatepaymentproviders`;

  constructor(private http: HttpClient) {}

  //#region  Retrieve an array of payment providers at Xente
  getAllPaymentProviders(): Observable<IPaymentProvider[]> {
    return this.http.get<IPaymentProvider[]>(this.paymentProvidersUrl);
  }
  //#endregion

  updateAllPaymentProviders(): Observable<IPaymentProvider[]> {
    return this.http.get<IPaymentProvider[]>(this.updatePaymentProvidersUrl);
  }
}
