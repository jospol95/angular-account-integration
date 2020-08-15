import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { LoginComponent } from './components/auth-page/login/login.component';
import { RegisterComponent } from './components/auth-page/register/register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AccountIntegrationComponent } from './components/home-page/account-integration/account-integration.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    AccountIntegrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
