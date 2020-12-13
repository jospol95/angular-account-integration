import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthPageComponent} from './components/auth-page/auth-page.component';
import {LoginComponent} from './components/auth-page/login/login.component';
import {RegisterComponent} from './components/auth-page/register/register.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AccountIntegrationComponent} from './components/home-page/account-integration/account-integration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './guards/auth.guard';
import {NegateAuthGuard} from './guards/negate-auth.guard';
import {JwtModule} from '@auth0/angular-jwt';
import { LogOutComponent } from './components/home-page/log-out/log-out.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';

export function tokenGetter() {
  return JSON.parse(localStorage.getItem('budget-me-auth-token'));

}


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AccountIntegrationComponent,
    AuthPageComponent,
    LogOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:6001']
      },
    }),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
  ],
  // exports: [
  //   RegisterComponent,
  //   LoginComponent
  // ],
  providers: [HttpClient, AuthGuard, NegateAuthGuard, NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
