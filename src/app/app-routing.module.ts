import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/auth-page/login/login.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AuthPageComponent} from './components/auth-page/auth-page.component';
import {RegisterComponent} from './components/auth-page/register/register.component';
import {AuthGuard} from './guards/auth.guard';
import {NegateAuthGuard} from './guards/negate-auth.guard';
import {LogOutComponent} from './components/home-page/log-out/log-out.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    component: AuthPageComponent,
    canActivate: [NegateAuthGuard],
    // component: AuthPageComponent
    loadChildren: () => import('./components/auth-page/auth.module').then(m => m.AuthModule)
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  {
    path: 'account',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    component: LogOutComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
