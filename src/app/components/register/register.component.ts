import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { IUser } from "../../models/user";
import { AuthenticationService } from "../../services/authentication.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  private newUser: IUser = {} as IUser;
  private returnUrl: string;

  private errorMessage: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.activatedRoute.snapshot.queryParams["returnUrl"] || "/";
  }

  registerUser(user: IUser): void {
    if (user.password == user.confirmPassword) {
      this.authService.registerUser(user).subscribe(
        response => {
          localStorage.setItem("user", JSON.stringify(response));
          this.router.navigate([this.returnUrl]);
        },
        error => {
          if (error instanceof HttpErrorResponse && error.status == 400) {
            this.errorMessage = "The email address is already in use";
          } else {
            this.errorMessage = "Error occured, try again later!";
            console.log(error);
          }
        }
      );
      // Wrong confirm password
    } else {
      this.errorMessage = "Confirm password do not match!";
    }
  }
}
