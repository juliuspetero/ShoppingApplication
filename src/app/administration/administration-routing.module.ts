import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route } from "@angular/compiler/src/core";
import { Routes, RouterModule } from "@angular/router";
import { AdministrationComponent } from "./administration.component";
import { CreateComponent } from "./components/create/create.component";
import { PaymentProvidersComponent } from "./components/payment-providers/payment-providers.component";
import { combineLatest } from "rxjs";
import { TransactionsComponent } from "./components/transactions/transactions.component";
import { AccountComponent } from "./components/account/account.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { UsersComponent } from "./components/users/users.component";
import { RolesComponent } from "./components/roles/roles.component";

const administrationRoutes: Routes = [
  {
    path: "administration",
    component: AdministrationComponent,
    children: [
      { path: "products", component: ProductsComponent },
      { path: "create", component: CreateComponent },
      { path: "paymentproviders", component: PaymentProvidersComponent },
      { path: "transactions", component: TransactionsComponent },
      { path: "account", component: AccountComponent },
      { path: "orders", component: OrdersComponent },
      { path: "users", component: UsersComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: ProfileComponent },
      { path: "roles", component: RolesComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(administrationRoutes)],
  // Allow you to use router-oulet directive
  exports: [RouterModule]
})
export class AdministrationRoutingModule {}
