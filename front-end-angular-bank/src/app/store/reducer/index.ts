import * as fromLogin from './login.reducer';
import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {initialState} from './login.reducer';

export interface AppState {
  login: fromLogin.State;
}

export const reducers: ActionReducerMap<AppState> = {
  login: fromLogin.reducer,
};

function log(reducer: ActionReducer<any>): ActionReducer<any>{
  return (state, action) => {
    const currentState = reducer( initialState, action);

    console.log('Etat précedent: ', initialState);
    console.log('Etat suivant: ', currentState);

    return currentState;
  };
}
export const metaReducers: MetaReducer<AppState>[] = [log];
