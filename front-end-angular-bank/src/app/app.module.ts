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
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
