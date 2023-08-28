import { Injectable } from '@angular/core';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
// @ts-ignore
import {Actions, createEffect, creatEffet, ofType} from '@ngrx/effects';
import {GenericsService} from '../../services/generics.service';
import {environment} from '../../../environments/environment';
import {HttpErrorResponse} from '@angular/common/http';
// import {loginUser, loginUserFailure, loginUserSuccess} from '../actions/login.actions';
import {loginUser, loginUserFailure, loginUserSuccess} from '../actions/login.actions';
import {LoginModel} from '../../models/login-model';
import {of} from 'rxjs';
import {Action} from 'redux';

@Injectable({
  providedIn: 'root'
})
export class LoginEffets {
  constructor(private actions$: Actions, private genericsServices: GenericsService) {}

  // @ts-ignore
  // @ts-ignore
  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      mergeMap(action =>
        this.genericsServices
          .postResource<LoginModel>(
            `/user/login`, action.payload)
          .pipe(
            switchMap((payload) => {
              console.log(action);
              return [loginUserSuccess({ payload })];
            }),
            catchError((err: HttpErrorResponse) =>
              of(loginUserFailure(err))
            )
          )
      )
    )
  );
}
