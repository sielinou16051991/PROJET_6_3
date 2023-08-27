import {Injectable} from '@angular/core';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
// @ts-ignore
import { Actions, creatEffet } from '@ngrx/effects';
import {GenericsService} from '../../services/generics.service';
import {environment} from '../../../environments/environment';
import {HttpErrorResponse} from '@angular/common/http';
import {loginUserFailure, loginUserSuccess} from '../actions/login.actions';
import {LoginModel} from '../../models/login-model';
import {of} from 'rxjs';

@Injectable()
private const baseUrl = environment.baseUrl;
export class LoginEffets {
  fetch$ = creatEffet(() =>
              this.actions$.pipe(
                mergeMap((action) =>
                    this.genericsServices
                      .postResource<LoginModel>(
                        `/user/login`, action.payload)
                      .pipe(
                        switchMap((payload) => {
                          return [loginUserSuccess({ payload })];
                        }),
                          catchError((err: HttpErrorResponse) =>
                            of(loginUserFailure(err))
                          )
                      )
                    )
                  )
              );
  constructor(private actions$: Actions, private genericsServices: GenericsService) {}
}
