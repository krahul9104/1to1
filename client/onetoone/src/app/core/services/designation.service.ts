import { Injectable } from "@angular/core";
import { CommonApiService } from "../http/common-api.service";
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { IDesignation } from "../interfaces/designation.service";
import { map, catchError } from "rxjs/operators";
import { Ilov } from "../interfaces/lov.service";

@Injectable({
  providedIn: "root"
})
export class DesignationService {
  private url: string;

  constructor(private commonApiService: CommonApiService) {
    this.url = environment.baseUrl + "designation";
  }

  public getAllDesignation(): Observable<[Ilov]> {
    return this.commonApiService.getRequest(this.url).pipe(
      map(res => res["designation"]),
      catchError(err => {
        console.log("Error while Calling " + this.url + " -> " + err);
        return of([]);
      })
    );
  }

  public getDesignationforDeptType(deptTypeId: string): Observable<[Ilov]> {
    return this.commonApiService
      .getRequest(this.url + "?deptTypeId=" + deptTypeId)
      .pipe(
        map(res => res["designation"]),
        catchError(err => {
          console.log("Error while Calling " + this.url + " -> " + err);
          return of([]);
        })
      );
  }
}
