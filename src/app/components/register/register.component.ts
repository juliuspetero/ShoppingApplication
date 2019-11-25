import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { IUser } from "../../models/user";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  private newUser: IUser = {} as IUser;

  private errorMessage: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  registerUser(user: IUser): void {
    console.log(user);
    this.router.navigate(["/products"]);
    // this.authService.registerUser(user).subscribe(
    //   response => {
    //     //console.log(response)
    //     localStorage.setItem("token", response.token);
    //     this.router.navigate(["/products"]);
    //   },
    //   error => {
    //     console.log(error);
    //     this.errorMessage = error.message;
    //   }
    // );
  }
}
