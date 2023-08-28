import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userProfileSubject = new BehaviorSubject<any>(null);
  userProfile$: Observable<any> = this.userProfileSubject.asObservable();

  updateProfile(profile: any) {
    this.userProfileSubject.next(profile);
  }
}
