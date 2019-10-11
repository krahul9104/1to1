import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IOrganization } from "../interfaces/organization.service";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class OrganizationApiService {
  private _url: string;
  constructor(private http: HttpClient) {
    this._url = environment.baseUrl + "organization";
  }

  getOrganization(): Observable<IOrganization[]> {
    return this.http.get<IOrganization[]>(this._url);
  }

  createOrganization(employee: IOrganization) {
    return this.http.post(this._url, employee);
  }
}
