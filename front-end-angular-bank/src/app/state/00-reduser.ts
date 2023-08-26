import {ActionReducer, createReducer, MetaReducer} from '@ngrx/store';
import {reduce} from 'rxjs/operators';

const initialState = {
  appName: 'ArgenceBanck'
};
console.log(initialState);
function log(reducer: ActionReducer<any>): ActionReducer<any>{
  return (state, action) => {
    const currentState = reducer(state, action);

    console.log('Etat précedent: ', state);
    console.log('Etat suivant: ', currentState);

    return currentState;
  };
}
export const metaReducers: MetaReducer[] = [log];

export  const rootReducer = createReducer(initialState);
