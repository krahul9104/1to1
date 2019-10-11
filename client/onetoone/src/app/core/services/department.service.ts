import { Injectable } from "@angular/core";
import { CommonApiService } from "../http/common-api.service";
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { Ilov } from "../interfaces/lov.service";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DepartmentService {
  private url: string;

  constructor(private commonApiService: CommonApiService) {
    this.url = environment.baseUrl + "department";
  }

  public getAllDepartment(): Observable<[Ilov]> {
    return this.commonApiService.getRequest(this.url).pipe(
      map(res => res["department"]),
      catchError(err => {
        console.log("Error while Calling " + this.url + " -> " + err);
        return of([]);
      })
    );
  }

  public getDepartmentforOrg(orgId: string): Observable<[Ilov]> {
    return this.commonApiService.getRequest(this.url + "?orgId=" + orgId).pipe(
      map(res => res["department"]),
      catchError(err => {
        console.log("Error while Calling " + this.url + " -> " + err);
        return of([]);
      })
    );
  }
}
