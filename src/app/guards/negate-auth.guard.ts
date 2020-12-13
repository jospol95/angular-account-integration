import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthGuard} from './auth.guard';

@Injectable()
export class NegateAuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService,
              private _userLoggedInGuard: AuthGuard,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['account']);
    }
    return true;
  }
}
