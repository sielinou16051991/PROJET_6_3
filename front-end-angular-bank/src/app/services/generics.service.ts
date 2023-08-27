import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericsService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ){}

  // tslint:disable-next-line:typedef
  public getResource(url: string) {
    return this.http.get(`${this.baseUrl + url}`).toPromise();
  }

  // tslint:disable-next-line:typedef
  public postResource<T>(url: string, payload: any, query?: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl + url}`, payload, {params: query});
  }

  // tslint:disable-next-line:typedef
  public putResource(url: string, dto: any) {
    return this.http.put(`${this.baseUrl + url}`, dto).toPromise();
  }

  // tslint:disable-next-line:typedef
  public deleteResource(url: string) {
    return this.http.delete(`${this.baseUrl}`).toPromise();
  }

  loginUser(email: string, password: string): Observable<string> {
    const data = {
      email: email,
      password: password,
    };
    const response = this.http
      .post<any>(`${this.baseUrl}/user/login`, data)
      .pipe(
        catchError((error) => {
          this.handleError(error);
          return throwError(error);
        })
      );
    console.log(response);
    return response;
  }

  getUserProfile(jwtToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return this.http
      .post<any>(`${this.baseUrl}/user/profile`, {}, { headers })
      .pipe(
        catchError((error) => {
          this.handleError(error);
          return throwError(error);
        })
      );
  }

  updateProfileApi(jwtToken: string, updatedProfile: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return this.http
      .put<any>(`${this.baseUrl}/user/profile`, updatedProfile, { headers })
      .pipe(
        catchError((error) => {
          this.handleError(error);
          return throwError(error);
        })
      );
  }

  private handleError(error: any): void {
    console.error('An error occurred:', error);
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      console.error('Error:', error.error.message);
    } else {
      // Server-side errors
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
  }
}
