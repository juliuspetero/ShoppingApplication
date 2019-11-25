import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(private http: HttpClientModule) {}
}
