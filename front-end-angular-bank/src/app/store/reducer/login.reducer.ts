import {LoginModel} from '../../models/login-model';
import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {loginUserFailure, loginUserSuccess} from '../actions/login.actions';
import {state} from '@angular/animations';
import {loginUser} from '../actions/login.actions';
import {Action} from 'redux';

export interface State {
  name: string;
  profile: LoginModel[];
  error: any;
  isLoggedIn: boolean;
  // reducers: {
  //   logoutUser: (state) => {
  //     state.profile = null;
  //     state.isLoggedIn = false;
  //   },
  // },
}
// @ts-ignore
// @ts-ignore
export const initialState: State = {
    name: 'user',
    profile: [],
    error: {
      error: '',
      message: '',
      details: '',
      statusCode: 0,
    },
    isLoggedIn: false
  };
// @ts-ignore
const loginReducer = createReducer(
  initialState,
  on(loginUser, (state) => {
    return { ...state, isLoggedIn: false};
  }),
  on(loginUserSuccess, (state: any, payload: any ) => {
    return { ...state, isLoggedIn: true, profile: payload};
  }),
  on(loginUserFailure, (state: any, error: any ) => {
    return { ...state, isLoggedIn: false, error};
  }),
);

export function reducer(state: State | undefined, action: Action): State {
  // @ts-ignore
  return loginReducer(state, action);
}

export const featureKey = 'user';

const userState = createFeatureSelector(featureKey);

// @ts-ignore
export const getDataSelector = createSelector(userState, (state: any,) => state.data);
