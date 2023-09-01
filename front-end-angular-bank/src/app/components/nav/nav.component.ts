import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GenericsService} from '../../services/generics.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public url = '';
  @Input() firstName: any;
  @Input() lastName: any;

  constructor(
    public router: Router,
    public genericsService: GenericsService
  ) { }

  ngOnInit(): void {
    this.url = this.router.url;
    console.log(this.url);
  }

  handelerLogOut = () => {
    console.log('Déconnexion de l\'utilisateur');
    // @ts-ignore
    // const resp = dispatch(this.genericsService.logOut());
    // console.log(resp);
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/']).then(r => console.log(r));
    this.genericsService.logOut();

  }
  handelerSignIn = () => {
    console.log('sign-in page');
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/sign-in']).then(r => console.log(r));
    // this.genericsService.logOut();

  }
}
