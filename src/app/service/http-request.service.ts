import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Observable} from "rxjs";
import User from "../model/user";

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
    return this.httpClient.post<E>(url, object);
  }

  public deleteById(endpoint: string, objectId: number) {
    const url = `${this.apiUrl}/${endpoint}/${objectId}`;
    this.httpClient.delete(url);
  }

  public sendBasicAuthRequest(username: string, password: string): Observable<User> {
    const basicAuth = btoa(`${username}:${password}`);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${basicAuth}`,
      }),
    }
    return this.httpClient.get<User>(`${this.apiUrl}/user/login`, httpOptions);
  }


}
