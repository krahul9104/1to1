import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CommonApiService {
  private _url: string;

  constructor(private httpClient: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = "Unknown error!";
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  public getRequest(url: string) {
    return this.httpClient.get(url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  public getRequestWithFormParam(url: string, formString: string) {
    const options = { params: new HttpParams({ fromString: formString }) };
    return this.httpClient.get(url, options).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  public postRequest(url: string, obj: any) {
    console.log("in common api post");
    return this.httpClient.post(this._url, obj);
    /*.pipe(
      retry(3),
      catchError(this.handleError)
    );*/
  }
}
