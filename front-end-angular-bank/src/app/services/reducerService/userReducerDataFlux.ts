
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {state} from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  data = {
    name: 'user',
    initialState: {
      profile: null,
      error: null,
      isLoggedIn: false
    },
    reducers: {
      logoutUser: (stat: any) => {
        stat.profile = null;
        stat.isLoggedIn = false;
      },
    },
    extraReducers: (builder: any) => {
      console.log(builder);
    },
  };
}
