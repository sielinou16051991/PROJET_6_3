import { Component, OnInit } from '@angular/core';
import {GenericsService} from '../../services/generics.service';
import {data} from '../../../data/dataAccount';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public dataAccount: any;
  // public profile = useSelector((state) => state.user.profile);
  // public error = useSelector((state) => state.user.error);

  constructor(
    private genericsService: GenericsService
  ) { }

  ngOnInit(): void {
    // this.genericsService.getResource('/user/profile').then((response) => {
    //   console.log(response);
    // });
    this.dataAccount = data;
    console.log(this.dataAccount);
  }

}
