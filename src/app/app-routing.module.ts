import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./components/product/product.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { AdministrationRoutingModule } from "./administration/administration-routing.module";

const routes: Routes = [
  { path: "", component: ProductComponent },
  { path: "products", component: ProductComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "details/:id", component: ProductDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "orders", component: OrdersComponent },
  {
    path: "administration",
    loadChildren: () =>
      import("./administration/administration-routing.module").then(
        m => m.AdministrationRoutingModule
      )
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), AdministrationRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
