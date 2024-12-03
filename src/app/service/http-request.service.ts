import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import { environment } from "../../environments/environment";
import {catchError, map, Observable} from "rxjs";
import User from "../model/user";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {

  readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient, private messageService: MessageService) {}

  private handleError(err: any, caught: Observable<any>) {
    this.messageService.add({severity: 'danger', summary: 'Error', detail: 'Error processing your request. Contact admin if errors continue.'});
    return caught;
  }

  public getRequest<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.httpClient.get<T>(url);
  }

  public postRequest<T, E>(endpoint: string, object: T): Observable<E> {
    const url =  `${this.apiUrl}/${endpoint}`;
    return this.httpClient.post<E>(url, object);
  }

  public deleteById(endpoint: string, objectId: number): Observable<number> {
    const url = `${this.apiUrl}/${endpoint}/${objectId}`;
    return this.httpClient.delete(url).pipe(map(() => objectId));
  }

  public deleteObject<T>(endpoint: string, object: T): Observable<boolean> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.httpClient.delete(url, object).pipe(map(() => true));
  }

  public sendBasicAuthRequest(username: string, password: string): Observable<HttpResponse<User>> {
    const basicAuth = btoa(`${username}:${password}`);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${basicAuth}`,
      }),
      observe: "response" as "response",
      responseType: "json" as "json"
    }
    return this.httpClient.get<User>(`${this.apiUrl}/user/login`, httpOptions);
  }


}
