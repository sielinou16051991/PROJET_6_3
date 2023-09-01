import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs';
import {GenericsService} from '../../services/generics.service';

@Component({
  selector: 'app-editable-name',
  templateUrl: './editable-name.component.html',
  styleUrls: ['./editable-name.component.scss']
})
export class EditableNameComponent implements OnChanges {

  @Input() fullName: any;
  @Input() onSave: any;
  @Input() update: any;
  @Output() emitLastName: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitFirstName: EventEmitter<any> = new EventEmitter<any>();
  @Output() newFullName: EventEmitter<any> = new EventEmitter<any>();
  public firstName: any;
  public lastName: any;
  public inputLastName: any;
  public inputFirstName: any;
  public editing = true;
  profileUpdate: any;
  displayName: any;
  @Output() displayEdit: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private genericsService: GenericsService
  ) { }

  // ngOnInit(): void {
  //   console.log(this.inputLastName);
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(localStorage.getItem('firstName'));
    this.profileUpdate = {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      displayEdit: false
    };
  }

  handleSave() {
    this.update = !this.update;
    const data = {
      firstName: this.inputFirstName,
      lastName: this.inputLastName
    };
    // this.newFullName.emit(data);
    const jwtToken = localStorage.getItem('jwtToken');
    const findToken: Subscription = this.genericsService.updateProfile(jwtToken, data).subscribe(
      (response: any) => {
        console.log(response);
        this.profileUpdate = {
          firstName: response.body.firstName,
          lastName: response.body.lastName
        };
        localStorage.setItem('firstName', this.profileUpdate.firstName);
        localStorage.setItem('lastName', this.profileUpdate.lastName);
        console.log(this.profileUpdate);
        this.profileUpdate = {
          firstName: localStorage.getItem('firstName'),
          lastName: localStorage.getItem('lastName'),
          displayEdit: false
        };
        console.log(this.profileUpdate);
        this.newFullName.emit(this.profileUpdate);
      }, (error: any) => {
        console.log(error);
      }
    );
    // this.displayEdit.emit(false);
  }

  // tslint:disable-next-line:typedef
   handleCancel() {
    console.log(this.fullName);
    if (this.fullName) {
      this.firstName = this.fullName.split(' ')[0];
      this.lastName = this.fullName.split(' ')[1];
    }else{
      this.firstName = ' ';
      this.lastName = ' ';
    }
    this.editing = false;
  }
}
