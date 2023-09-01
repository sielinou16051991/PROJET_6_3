import { Component, OnInit } from '@angular/core';
import {GenericsService} from '../../services/generics.service';
import {Router} from '@angular/router';
import {LoginPayload} from '../../models/login-model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public email = '';
  public password = '';
  public messageError = '';
  public token = '';
  public rememberMe = false;
  constructor(
    private router: Router,
    private genericsService: GenericsService,
  ) { }

  ngOnInit(): void {
    // this.genericsService.getResource(`${environment.baseUrl}/api/v1`).then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.error(error);
    // });
  }


  handleEmailChange = (event: any) => {
    this.email = event.target.value;
    console.log(this.email);
  }
  handlePasswordChange = (event: any) => {
    this.password = event.target.value;
    console.log(this.password);
  }
  handleRememberMeChange = (event: any) => {
    this.rememberMe = event.target.checked;
    console.log(this.rememberMe);
  }

  // tslint:disable-next-line:typedef
  handleSubmit(event: any) {
    console.log(event);
    event.preventDefault();

    const connexionCredentials = {
      'tony@stark.com': 'password123',
      'steve@rogers.com': 'password456'
    };

    // vérifions si l'email est autorisé
    if (!Object.keys(connexionCredentials).includes(this.email)) {
      this.messageError = 'Email non autorisé';
      return;
    }

    // vérifion si le mot de passe entrée correspond a celui de l'email autorisé
    // @ts-ignore
    if (connexionCredentials[this.email] !== this.password) {
      this.messageError = 'Mot de passe non autorisé';
      return;
    }

    try {
      // console.log('token');
      const data = new LoginPayload(this.email, this.password);
      console.log('data', data);
      // console.log({email, password});
      // const token = await dispatch(loginUser({email, password})).unwrap(); // connexion de l'utilisateur et attente du jeton
      const fineToken: Subscription = this.genericsService.loginUser(this.email, this.password).subscribe(
        (value: any) => {
          console.log('token', value.body.token);
          this.token = value.body.token;
          // "token" correspondant aux parametres {email, password}
          console.log(this.token);
          // @ts-ignore
          localStorage.setItem('jwtToken', this.token);  // envoi des parametres de connexion dans le localStorage
          if (this.token !== '') {
            // await dispatch(fetchUserProfile(token)).unwrap();
            this.router.navigate(['/user']);
            if (this.rememberMe) {
              localStorage.setItem('rememberMe', String(true));
              localStorage.setItem('email', this.email);
              localStorage.setItem('password', this.password);
            } else {
              // localStorage.removeItem('rememberMe');
              // localStorage.removeItem('email');
              // localStorage.removeItem('password');
            }
          }
        }, (error: any) => {
          console.log('error', error);
        }
      );

    } catch (err) {
      console.error(err);
    }
  }
}


