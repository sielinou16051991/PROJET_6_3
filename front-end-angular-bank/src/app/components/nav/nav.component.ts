import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GenericsService} from '../../services/generics.service';
import {LogOutModel} from '../../models/LogOutModel';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public url = '';
  @Input() firstName: any;
  @Input() lastName: any;
  private password: string | null | undefined;
  private email: string | null | undefined;

  constructor(
    public router: Router,
    public genericsService: GenericsService
  ) { }

  ngOnInit(): void {
    this.url = this.router.url;
    console.log(this.url);
    this.email = localStorage.getItem('email');
    this.password = localStorage.getItem('password');
    // console.log(localStorage.getItem('email'));
    // console.log(localStorage.getItem('password'));
  }

  handelerLogOut = () => {
    console.log('Déconnexion de l\'utilisateur');
    // @ts-ignore
    // const resp = dispatch(this.genericsService.logOut());
    // console.log(resp);

    const dto = new LogOutModel(
      this.email,
      this.password,
      this.firstName,
      this.lastName,
    );
    console.log(dto);
    this.genericsService.logOut();
    // localStorage.removeItem('jwtToken');
    // this.router.navigate(['/']).then(r => console.log(r));

  }
  handelerSignIn = () => {
    console.log('sign-in page');
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/sign-in']).then(r => console.log(r));
    // this.genericsService.logOut();

  }
}
