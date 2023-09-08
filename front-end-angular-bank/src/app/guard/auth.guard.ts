import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLogIn: string | null | undefined;

  constructor(
    private router: Router,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isLogIn = localStorage.getItem('jwtToken');
    if (this.isLogIn) {
      return true;
    } else {
      console.log('pas de token');
      this.router.navigate(['/sign-in']).then(r => console.log(r) );
      return false;
    }
  }
}
