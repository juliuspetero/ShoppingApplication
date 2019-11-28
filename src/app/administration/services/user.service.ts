import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IUser } from "src/app/administration/models/user";
import { Observable } from "rxjs";
import { SharedService } from "src/app/services/shared.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private usersUrl: string = `${SharedService.baseUrl}/users`;
  constructor(private http: HttpClient) {}

  getNumberOfUsers(): Observable<any> {
    return this.http.get<any>(`${this.usersUrl}/count`);
  }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl);
  }
}
