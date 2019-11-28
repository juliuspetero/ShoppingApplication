import { Injectable } from "@angular/core";
import { HttpClient, JsonpInterceptor } from "@angular/common/http";
import { Router } from "@angular/router";
import { IUser } from "../models/user";
import { Observable } from "rxjs";
import { SharedService } from "./shared.service";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private registerUrl = `${SharedService.baseUrl}/accounts/register`;
  private loginUrl = `${SharedService.baseUrl}/accounts/login`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedService: SharedService
  ) {}

  // Register a new user
  registerUser(user: IUser): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }

  // Login a registered user
  loginUser(user: IUser): Observable<any> {
    console.log(this.loginUrl);
    return this.http.post<any>(this.loginUrl, user);
  }

  // This is used in the authentication guard
  isLoggedIn(): boolean {
    // Returns true when token is present
    return !!localStorage.getItem("user");
  }

  isInAdminRole(): boolean {
    const userRole = JSON.parse(localStorage.getItem("user")).role;
    if (userRole == "admin") {
      return true;
    } else {
      return false;
    }
  }

  // Get the token from the local storage
  getToken(): string {
    if (localStorage.getItem("user") == null) {
      return null;
    } else {
      return JSON.parse(localStorage.getItem("user")).token;
    }
  }

  logoutUser(): void {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    this.sharedService.updateCartCount(0);
  }
}
