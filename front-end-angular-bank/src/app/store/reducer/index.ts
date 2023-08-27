import * as fromLogin from './login.reducer';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';

export interface AppState {
  login: fromLogin.State;
}

export const reducers: ActionReducerMap<AppState> = {
  login: fromLogin.reducer,
};

export const metaReducer: MetaReducer<AppState>[] = !environment.production ? [] : [];
