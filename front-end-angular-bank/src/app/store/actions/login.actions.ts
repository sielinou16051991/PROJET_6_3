import {createAction, props} from '@ngrx/store';
import {LoginModel} from '../../models/login-model';

export const loginUser = createAction('[Utilisateur] connexion user/loginUser', props<{ payload: LoginModel}>());
/**
 *  Action permetant de connecter un utilisateur
 */
export const loginUserSuccess = createAction(
  '[Utilisateur] connexion success user/loginUser',
  props<{ payload: LoginModel}>()
);
export const loginUserFailure = createAction(
  '[Utilisateur] connexion faiure user/loginUser',
  props<{ error?: any }>()
);
