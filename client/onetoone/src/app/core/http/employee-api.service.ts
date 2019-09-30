import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IEmployee } from "../interfaces/employee.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeAPIService {
  private _url: string = "http://localhost:3000/employees";
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

  createEmployee(employee: IEmployee) {
    return this.http.post(this._url, employee);
  }
}
