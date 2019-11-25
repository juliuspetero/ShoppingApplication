import { NgModule } from "@angular/core";
import { CreateComponent } from "./components/create/create.component";
import { AdministrationRoutingModule } from "./administration-routing.module";
import { AdministrationComponent } from "./administration.component";
import { FormsModule } from "@angular/forms";
import { AccountComponent } from "./components/account/account.component";
import { PaymentProvidersComponent } from "./components/payment-providers/payment-providers.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { TransactionsComponent } from "./components/transactions/transactions.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./components/users/users.component";
import { RolesComponent } from "./components/roles/roles.component";
import { TransactionService } from "./services/transaction.service";

@NgModule({
  declarations: [
    AdministrationComponent,
    CreateComponent,
    AccountComponent,
    PaymentProvidersComponent,
    DashboardComponent,
    OrdersComponent,
    TransactionsComponent,
    ProductsComponent,
    ProfileComponent,
    UsersComponent,
    RolesComponent
  ],

  // Common modules contains directives like ngFor ngIf etc.
  imports: [FormsModule, CommonModule, AdministrationRoutingModule],

  providers: [TransactionService],
  exports: []
})
export class AdministrationModule {}
