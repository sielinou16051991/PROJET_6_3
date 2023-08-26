import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericsService {
  constructor(
    private http: HttpClient,
  ){}

  // tslint:disable-next-line:typedef
  public getResource(url: string) {
    return this.http.get(`${environment.baseUrl + url}`).toPromise();
  }

  // tslint:disable-next-line:typedef
  public postResource(url: string, dto: any) {
    return this.http.post(`${environment.baseUrl + url}`, dto).toPromise();
  }

  // tslint:disable-next-line:typedef
  public putResource(url: string, dto: any) {
    return this.http.put(`${environment.baseUrl + url}`, dto).toPromise();
  }

  // tslint:disable-next-line:typedef
  public deleteResource(url: string) {
    return this.http.delete(`${environment.baseUrl}`).toPromise();
  }
}
