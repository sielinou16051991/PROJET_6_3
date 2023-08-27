import { Component, OnInit } from '@angular/core';
import {GenericsService} from '../../services/generics.service';
import {data} from '../../../data/dataAccount';
import {AppState} from '../../store/reducer';
import {Store} from 'redux';
import {select} from '@ngrx/store';
import {getDataSelector} from '../../store/reducer/login.reducer';
import {LoginModel} from '../../models/login-model';
import {loginUser} from '../../store/actions';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public dataAccount: any;
  // public profile = useSelector((state) => state.user.profile);
  // public error = useSelector((state) => state.user.error);
   data: any;

  constructor(
    private genericsService: GenericsService,
    // tslint:disable-next-line:variable-name
    // private _store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    // this._initUser();
    // const profile = this._store.dispatch(loginUser());
    // console.log(profile);
    // this.genericsService.getResource('/user/profile').then((response) => {
    //   console.log(response);
    // });
    // this.dataAccount = data;
    // console.log(this.dataAccount);
    // this.genericsService.loginUser('this.baseUrl', 'this.baseUrl');
  }

  // tslint:disable-next-line:typedef
  // private _initUser() {
  //   this._store
  //     .pipe(select(getDataSelector))
  //     .subscribe((data) => {
  //       this.data = (data || []).map(
  //         (d: any) => new LoginModel({
  //           ...d,
  //         })
  //       );
  //       console.log('data', this.data);
  //     });
  // }

}
