import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthPageComponent} from './auth-page.component';
import {RouterModule} from '@angular/router';
import {AuthRoutingModule} from './auth-routing.module';
import {MatSnackBarModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    MatSnackBarModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    CommonModule,
  ],
})
export class AuthModule {

}

