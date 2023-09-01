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
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.home = true;
    this.url = this.router.url;
    console.log(this.url);
  }

}
