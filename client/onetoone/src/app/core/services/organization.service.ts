import { Injectable } from "@angular/core";
import { IOrganization } from "../interfaces/organization.service";
import { CommonApiService } from "../http/common-api.service";
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { Ilov } from "../interfaces/lov.service";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class OrganizationService {
  private url: string;

  constructor(private commonApiService: CommonApiService) {
    this.url = environment.baseUrl + "organization";
  }

  public getOrgIDName(): Observable<[Ilov]> {
    return this.commonApiService.getRequest(this.url).pipe(
      map(res => res["organization"]),
      catchError(err => {
        console.log("Error while Calling " + this.url + " -> " + err);
        return of([]);
      })
    );
  }
}
