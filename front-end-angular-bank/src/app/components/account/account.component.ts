import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() title: any;
  @Input() accountNumber: any;
  @Input() accountPrice: any;
  @Input() subTitle: any;
  constructor() { }

  ngOnInit(): void {
  }

}
