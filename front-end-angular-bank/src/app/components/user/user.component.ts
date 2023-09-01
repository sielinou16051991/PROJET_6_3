import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GenericsService} from '../../services/generics.service';
import {data} from '../../../data/dataAccount';
import {AppState} from '../../store/reducer';
// import {Store} from '@ngrx/store';
import {LoginModel} from '../../models/login-model';
import {getDataSelector} from '../../store/reducer/login.reducer';
import {select, Store} from '@ngrx/store';
import {StateServiceService} from '../../services/state-service.service';
import {Observable} from 'rxjs';
import {ConsoleLogger} from '@angular/compiler-cli/ngcc';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public newProfile: string | undefined;
  public profileUser: any;
  public dataAccount: any;
  public lastName: any;
  public firstName: any;
  // public profile = useSelector((state) => state.user.profile);
  // public error = useSelector((state) => state.user.error);
  public profile = {
    fullName: 'full name'
  };

  public data = {
    email: 'steve@rogers.com',
    password: 'password456'
  };

   profile$: Observable<any> | undefined;
   update = false;
    displayName: any;
   newFullName: any;
  constructor(
    private genericsService: GenericsService,
    private store: Store<AppState>,
    private stateServiceService: StateServiceService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.firstName = localStorage.getItem('firstName').toUpperCase();
    // @ts-ignore
    this.lastName = localStorage.getItem('lastName').toUpperCase();
    this.profile$ = this.stateServiceService.userProfile$;
    this.dataAccount = data;
  }


  logout() {
    this.stateServiceService.logoutUser();
  }

  handleNewFullName(event: any): void {
    console.log('newFullName', event);
    this.newFullName = event;
    if (this.newFullName) {
      this.update = this.newFullName.displayEdit;
      this.lastName = this.newFullName.lastName.toUpperCase().replace(/"/g, '');
      this.firstName = this.newFullName.firstName.toUpperCase().replace(/"/g, '');
      this.displayName = {
        lastName: this.newFullName.lastName.toUpperCase(),
        firstName: this.newFullName.firstName.toUpperCase()
      };
      console.log(this.displayName);
    }
  }

  /**
   * pour mettre a jour un utilisateur, il faut envoyer le token a la dto
   * le token doit etre recupéré dans le localStorage
   */
  // tslint:disable-next-line:typedef
  handleNameUpdate(newName: any) {
    console.log(newName);
    this.update = true;
  }
}
