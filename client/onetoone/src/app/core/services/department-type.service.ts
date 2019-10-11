import { Injectable } from "@angular/core";
import { CommonApiService } from "../http/common-api.service";
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { Ilov } from "../interfaces/lov.service";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DepartmentTypeService {
  private url: string;

  constructor(private commonApiService: CommonApiService) {
    this.url = environment.baseUrl + "departmentType";
  }

  public getAllDepartmentType(): Observable<[Ilov]> {
    return this.commonApiService.getRequest(this.url).pipe(
      map(res => res["departmentType"]),
      catchError(err => {
        console.log("Error while Calling " + this.url + " -> " + err);
        return of([]);
      })
    );
  }

  public getDepartmentTypeforDept(deptId: string): Observable<[Ilov]> {
    return this.commonApiService
      .getRequest(this.url + "?deptId=" + deptId)
      .pipe(
        map(res => res["departmentType"]),
        catchError(err => {
          console.log("Error while Calling " + this.url + " -> " + err);
          return of([]);
        })
      );
  }
}
