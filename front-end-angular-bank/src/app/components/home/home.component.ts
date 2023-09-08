import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public home = false;
  public url = '';
  public isLogIn: string | null | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.home = true;
    this.url = this.router.url;
    console.log(this.url);
    this.isLogIn = localStorage.getItem('jwtToken');
    if (this.isLogIn) {
      this.router.navigate(['/user']).then((res: any) => {
        console.log(res);
      });
    }
  }
}
