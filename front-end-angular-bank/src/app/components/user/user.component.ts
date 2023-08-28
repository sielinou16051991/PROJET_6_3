import { Component, OnInit } from '@angular/core';
import {GenericsService} from '../../services/generics.service';
import {data} from '../../../data/dataAccount';
import {AppState} from '../../store/reducer/index';
// import {Store} from '@ngrx/store';
import {LoginModel} from '../../models/login-model';
import {getDataSelector} from '../../store/reducer/login.reducer';
import {select, Store} from '@ngrx/store';
import {StateServiceService} from '../../services/state-service.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public dataAccount: any;
  // public profile = useSelector((state) => state.user.profile);
  // public error = useSelector((state) => state.user.error);

  public data = {
    email: 'steve@rogers.com',
    password: 'password456'
  };

   profile$: Observable<any> | undefined;
  constructor(
    private genericsService: GenericsService,
    private store: Store<AppState>,
    private stateServiceService: StateServiceService
  ) {
  }

  ngOnInit(): void {
    this.updateUser(this.data);
    this.profile$ = this.stateServiceService.userProfile$;
    console.log(this.profile$);
    this.initUser();
    this.dataAccount = data;
    console.log(this.dataAccount);
    console.log(this.genericsService.loginUser(this.data));
  }

  // tslint:disable-next-line:typedef
  private initUser() {
    this.store
      .pipe(select(getDataSelector))
      .subscribe((data) => {
        this.data = (data || []).map(
          (email: any, password: any) => new LoginModel(
            email,
            password
          )
        );
        console.log('data', this.data);
      });
  }


  logout() {
    this.stateServiceService.logoutUser();
  }

  /**
   * pour mettre a jour un utilisateur, il faut envoyer le token a la dto
   * le token doit etre recupéré dans le localStorage
   */
  // tslint:disable-next-line:typedef
  updateUser(dto: any) {
    this.genericsService.putResource('/user/profile', dto).then((response) => {
      console.log(response);
    });
  }

}
