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
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './components/header/header.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
// import rooterReducer from './store/reducer/rooterReducer';
import {reducers} from './store/reducer';
// import {metaReducers} from './state/00-reduser';
import {metaReducers} from './store/reducer/index';
import {Effects} from './store/effets';

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
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
    EffectsModule.forRoot(Effects),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
