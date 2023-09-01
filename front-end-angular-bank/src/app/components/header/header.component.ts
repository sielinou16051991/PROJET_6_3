import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() home: boolean | undefined;
  @Input() firstName: any;
  @Input() lastName: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.home);
  }

}
