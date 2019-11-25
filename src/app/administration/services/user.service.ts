import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { IUser } from "src/app/administration/models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClientModule) {}

  getAllUsers(): IUser[] {
    return [
      {
        id: "1",
        email: "john@gmail.com",
        phone: "256788282",
        role: "admin"
      },
      {
        id: "2",
        email: "meddie@gmail.com",
        phone: "256788282",
        role: "user"
      }
    ];
  }
}
