import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  private userProfileSubject = new BehaviorSubject<any>({email: '', password: ''});
  userProfile$: Observable<any> = this.userProfileSubject.asObservable();

  logoutUser() {
    this.userProfileSubject.next(null);
  }

  fetchUserProfile() {
    // Appeler votre service pour récupérer le profil utilisateur
    // Mettre à jour le userProfileSubject avec les données récupérées

  }

  loginUser() {
    // Appeler votre service de connexion
    // Mettre à jour le userProfileSubject avec les données de connexion
  }
}
