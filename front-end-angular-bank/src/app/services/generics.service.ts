import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Observable, OperatorFunction, throwError} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GenericsService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private router: Router
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
  public putResource(url: string, jwtToken: any, updatedProfile: any): any {
    try {
      const response = this.http.put(
        `${this.baseUrl + url}`,
        updatedProfile,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        }).toPromise();
      console.log(response);
      // if (response.status !== 200) {
      //   alert('Erreur lors de la mise a jour du profile');
      //   // throw new Error("Erreur lors de la mise a jour du profile");
      // }
      console.log(response);
      return response;
    } catch (error) {
    console.log(error);
    }
    // @ts-ignore
    // return this.http.put(`${this.baseUrl + url}`).toPromise();
  }

  // tslint:disable-next-line:typedef
  public deleteResource(url: string) {
    return this.http.delete(`${this.baseUrl}`).toPromise();
  }

  // loginUser(data: any): Observable<string> {
  //   const response = this.http
  //     .post<any>(`${this.baseUrl}/user/login`, data)
  //     .pipe(
  //       catchError((error) => {
  //         this.handleError(error);
  //         return throwError(error);
  //       })
  //     );
  //   const name = {
  //     name: 'SSIELINOU',
  //     firstName: 'ERIC'
  //   };
  //   localStorage.setItem('name', JSON.stringify(name));
  //   console.log(localStorage.getItem('name'));
  //   console.log(response);
  //   return response;
  // }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/user/login`, {email, password});
  }
  updateProfile(jwtToken: any, data: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/user/profile`,
      data,
      {
          headers: { Authorization: `Bearer ${jwtToken}`}
      });
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

  public logOut(): any {
    /**
     * Deconnecter l'utilisateur
     */
    return this.http.get(`${this.baseUrl}/user/signup`).subscribe((result: any) => {
      window.localStorage.clear();
      this.router.navigate(['/']).then(
        () => {
          window.location.reload();
        }
      );
    }, error => {
      console.log(error);
    });
  }
}

