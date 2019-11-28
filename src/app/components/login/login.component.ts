import { Component, OnInit } from "@angular/core";
import { IUser } from "../../models/user";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthenticationService } from "../../services/authentication.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private registeredUser: IUser = {} as IUser;
  private errorMessage: string;
  private returnUrl: string;
  private loading = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.authService.logoutUser();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];
  }

  loginUser(user: IUser): void {
    this.loading = true;
    this.authService.loginUser(this.registeredUser).subscribe(
      response => {
        localStorage.setItem("user", JSON.stringify(response));

        if (response.role == "admin" && this.returnUrl) {
          this.router.navigate([this.returnUrl]);
        } else if (response.role == "buyer" && this.returnUrl) {
          console.log(this.returnUrl);
          if (this.returnUrl.includes("admin")) {
            this.router.navigate(["/products"]);
          } else {
            this.router.navigate([this.returnUrl]);
          }
        } else if (response.role == "admin" && !this.returnUrl) {
          this.router.navigate(["/administration"]);
        } else if (response.role == "buyer" && !this.returnUrl) {
          this.router.navigate(["/products"]);
        }
      },
      error => {
        if (error instanceof HttpErrorResponse && error.status == 401) {
          this.errorMessage = "Incorrect email or password";
        } else {
          this.errorMessage = "Error occur while accessing your account";
        }
      }
    );
  }
}
