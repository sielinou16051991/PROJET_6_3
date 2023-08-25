import { Component, OnInit } from '@angular/core';
import {GenericsService} from '../../services/generics.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private genericsService: GenericsService
  ) { }

  ngOnInit(): void {
    this.genericsService.getResource(`${environment.baseUrl}/api/v1`).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  }

}
