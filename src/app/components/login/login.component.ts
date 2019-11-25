import { Component, OnInit } from "@angular/core";
import { IUser } from "../../models/user";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private loginUserData: IUser = {} as IUser;
  private errorMessage: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  loginUser(): void {
    this.authService.loginUser(this.loginUserData).subscribe(
      response => {
        console.log(response);
        localStorage.setItem("token", response.token);
        this.router.navigate(["/products"]);
      },
      error => {
        if (error instanceof HttpErrorResponse && error.status == 401) {
          this.errorMessage = "Failed login attempt";
        } else {
          this.errorMessage = "Error occur while accessing your account";
        }
      }
    );
  }
}
