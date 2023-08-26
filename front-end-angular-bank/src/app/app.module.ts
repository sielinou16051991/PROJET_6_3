import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { EditableNameComponent } from './components/editable-name/editable-name.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserComponent } from './components/user/user.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { CardHomeComponent } from './components/card-home/card-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    EditableNameComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    NotFoundComponent,
    SignInComponent,
    UserComponent,
    LogOutComponent,
    HeaderComponent,
    CardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
