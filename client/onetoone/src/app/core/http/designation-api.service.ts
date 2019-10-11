import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IDesignation } from "../interfaces/designation.service";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class DesignationApiService {
  private _url: string;
  constructor(private http: HttpClient) {
    this._url = environment.baseUrl + "designation";
  }

  getDesignation(): Observable<IDesignation[]> {
    return this.http.get<IDesignation[]>(this._url);
  }

  createDesignation(desgn: IDesignation) {
    return this.http.post(this._url, desgn);
  }
}
