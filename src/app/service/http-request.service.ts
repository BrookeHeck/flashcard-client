import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public getRequest<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.httpClient.get<T>(url);
  }

  public postRequest<T, E>(endpoint: string, object: T): Observable<E> {
    const url =  `${this.apiUrl}/${endpoint}`;
    return this.httpClient.post(url, object);
  }

  public deleteById(endpoint: string, objectId: number) {
    const url = `${this.apiUrl}/${endpoint}/${objectId}`;
    this.httpClient.delete(url);
  }
}
