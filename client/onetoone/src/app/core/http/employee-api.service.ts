import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IEmployee } from "../interfaces/employee.service";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class EmployeeAPIService {
  private _url: string;

  constructor(private http: HttpClient) {
    this._url = environment.baseUrl + "employees";
  }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

  createEmployee(employee: IEmployee) {
    return this.http.post(this._url, employee);
  }
}
