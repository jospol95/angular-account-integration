import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {noop} from 'rxjs';
import {UserLoginDtoModel} from '../../../models/user-login-dto.model';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {MatSnackBar} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthenticationMethod} from '../../../models/authentication-method.enum';
import {catchError} from 'rxjs/operators';
import {log} from 'util';
import {environment} from '../../../../environments/environment';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: UserLoginDtoModel;
  public loginForm: FormGroup;
  public redirectOnLogin: boolean;

  constructor(private readonly _router: Router,
              private _snackBar: MatSnackBar,
              private spinner: NgxSpinnerService,
              private readonly _authService: AuthenticationService) {
    this.redirectOnLogin = environment.redirectOnLogin;
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(25)])
    });
  }

  public doLoginWithAuthApi() {
    const userToLogin = this.getUserLoginFromLoginForm();
    this.spinner.show();
    this._authService.login(userToLogin).subscribe((loginSuccessful) => {
        if (loginSuccessful) {
          if (this.redirectOnLogin === true) {
            this.goToBudgetApp();
          } else {
            this._router.navigate(['/account']).then();
          }
        }
      },
      // todo: global error handling
      (error: HttpErrorResponse) => {
        this.spinner.hide();
        let displayError = 'An unknown error occurred';
        if (typeof error.error === 'string') {
          // means that a custom message came from the API
          displayError = error.error;
        }
        this._snackBar.open(displayError, '', {
          duration: 2500,
          panelClass: ['error-snackbar']
        });
      },
      () => {
        this.spinner.hide();
      }
    );
  }

  public login() {
    window.alert('logged');
  }

  goToBudgetApp() {
    this._authService.authorizeWithBudgetApp();
    // this._router.navigate(['/home']).then(() => noop());
  }

  private getUserLoginFromLoginForm() {
    const user: UserLoginDtoModel = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
      authenticationMethod: AuthenticationMethod.AuthApi,
    };
    return user;
  }

}

