import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IDepartmentType } from "../interfaces/departmentType.service";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class DepartmentTypeApiService {
  private _url: string;
  constructor(private http: HttpClient) {
    this._url = environment.baseUrl + "departmentType";
  }

  getDepartmentType(): Observable<IDepartmentType[]> {
    return this.http.get<IDepartmentType[]>(this._url);
  }

  createDepartmentType(deptType: IDepartmentType) {
    return this.http.post(this._url, deptType);
  }
}
