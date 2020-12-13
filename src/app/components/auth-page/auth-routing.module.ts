import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NgModule} from '@angular/core';
import {AuthModule} from './auth.module';
import {AuthPageComponent} from './auth-page.component';

const routes: Routes = [
  {
    path: '',
    // component: AuthPageComponent,
    pathMatch: 'full',
    redirectTo: 'register'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {

}
