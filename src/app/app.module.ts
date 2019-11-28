import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./components/product/product.component";
import { CartComponent } from "./components/cart/cart.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthenticationService } from "./services/authentication.service";
import { ProductService } from "./services/product.service";
import { AuthenticationGuard } from "./guards/authentication.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { SharedService } from "./services/shared.service";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { OrderService } from "./services/order.service";
import { AdministrationModule } from "./administration/administration.module";
import { AdministrationGuard } from "./guards/administration.guard";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AdministrationModule
  ],
  providers: [
    AuthenticationService,
    ProductService,
    AuthenticationGuard,
    SharedService,
    OrderService,
    AdministrationGuard,
    // Using interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      // In order to use multiple interceptors if required
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
