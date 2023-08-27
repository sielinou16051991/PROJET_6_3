import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserReducerDataFluService {

  constructor() { }


  getState() {
    const data = {
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
    return data;
  }
}
