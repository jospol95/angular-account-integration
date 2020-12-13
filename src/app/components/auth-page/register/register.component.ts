import {Component, OnInit} from '@angular/core';
import {noop} from 'rxjs';
import {Router} from '@angular/router';
import {UserRegisterDtoModel} from '../../../models/user-register-dto.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserLoginDtoModel} from '../../../models/user-login-dto.model';
import {AuthenticationMethod} from '../../../models/authentication-method.enum';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthenticationService} from '../../../services/authentication.service';
import {MatSnackBar} from '@angular/material';
import {NgxSpinnerService} from 'ngx-spinner';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public model: UserRegisterDtoModel;
  public registerForm: FormGroup;
  public redirectOnLogin: boolean;

  constructor(private _router: Router,
              private readonly _snackBar: MatSnackBar,
              private spinner: NgxSpinnerService,
              private readonly _authService: AuthenticationService) {
    this.redirectOnLogin = environment.redirectOnLogin;
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      firstName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(25)])
    });
  }

  goToBudgetApp() {
    this._authService.authorizeWithBudgetApp();
    // this._router.navigate(['/home']).then(() => noop());
  }

  doRegisterWithAuthApi() {
    const userRegisterModel = this.getRegisterModelFromLoginForm();
    this.spinner.show();
    this._authService.register(userRegisterModel).subscribe((registerSuccessful) => {
        if (registerSuccessful) {
          if (this.redirectOnLogin === true) {
            this.goToBudgetApp();
          } else {
            this._router.navigate(['/account']).then();
          }
        }
      },
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
      }, () => {
        this.spinner.hide();
      }
    );
  }

  private getRegisterModelFromLoginForm() {
    const user: UserRegisterDtoModel = {
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      authenticationMethod: AuthenticationMethod.AuthApi,
    };
    return user;
  }
}
