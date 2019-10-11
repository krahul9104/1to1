import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IRole } from "../interfaces/role.service";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class RoleApiService {
  private _url: string;
  constructor(private http: HttpClient) {
    this._url = environment.baseUrl + "role";
  }

  getRole(): Observable<IRole[]> {
    return this.http.get<IRole[]>(this._url);
  }

  createRole(role: IRole) {
    return this.http.post(this._url, role);
  }
}
