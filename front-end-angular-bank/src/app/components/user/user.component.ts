import { Component, OnInit } from '@angular/core';
import {GenericsService} from '../../services/generics.service';
// import {useDispatch, useSelector} from '@angular-redux/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // public profile = useSelector((state) => state.user.profile);
  // public error = useSelector((state) => state.user.error);

  constructor(
    private genericsService: GenericsService
  ) { }

  ngOnInit(): void {
    this.genericsService.getResource('http://localhost:3001/api/v1').then((response) => {
      console.log(response);
    });
  }

}
