import { Injectable } from "@angular/core";
import { IEmployee } from "../interfaces/employee.service";
import { CommonApiService } from "../http/common-api.service";
import { throwError, of, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { map, catchError, finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private url: string;

  constructor(private commonApiService: CommonApiService) {
    this.url = environment.baseUrl + "employees";
  }

  getAllEmployee(): Observable<IEmployee[]> {
    return this.commonApiService.getRequest(this.url).pipe(
      map(res => res["employee"]),
      catchError(err => {
        console.log("Error while Calling " + this.url + " -> " + err);
        return of([]);
      })
    );
  }

  createEmployee(employee: IEmployee): Observable<IEmployee[]> {
    console.log("in createEmployee post");
    return this.commonApiService.postRequest(this.url, employee).pipe(
      map(res => res as IEmployee[]),
      catchError(err => {
        console.log("Error while Calling " + this.url + " -> " + err);
        return of([]);
      })
    );
  }
}
