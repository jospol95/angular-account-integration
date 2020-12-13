import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['auth']);
      return false;
    }
    return true;
  }
}
