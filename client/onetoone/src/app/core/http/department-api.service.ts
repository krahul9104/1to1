import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IDepartment } from "../interfaces/department.service";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class DepartmentApiService {
  private _url: string;
  constructor(private http: HttpClient) {
    this._url = environment.baseUrl + "organization";
  }

  getDepartment(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this._url);
  }

  createDepartment(dept: IDepartment) {
    return this.http.post(this._url, dept);
  }
}
