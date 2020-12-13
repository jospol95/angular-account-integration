import {Injectable} from '@angular/core';
import {BaseService} from './service-injector.service';
import {UserRegisterDtoModel} from '../models/user-register-dto.model';
import {noop, Observable, of, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {UserLoginDtoModel} from '../models/user-login-dto.model';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {

  // constructor() { }
  baseAuthUrl: string = this._baseUrl + 'authApi/auth';
  private readonly authTokenName = 'budget-me-auth-token';
  public helper = new JwtHelperService();

  public checkTicketExp() {
    const token = this._localStorage.getItemParsed(this.authTokenName);
    const isExpired = this.helper.isTokenExpired(token);
    if (isExpired) {
      this.killSession(true);
    }
  }

  public authorizeWithBudgetApp() {
    const token = this._localStorage.getItemParsed(this.authTokenName);
    window.location.href = environment.BUDGET_APP_URL + 'auth?auth-token=' + token;
  }

  public isLoggedIn(): boolean {
    return this._localStorage.getItemParsed(this.authTokenName) != null;
  }

  public killSession(redirectToLogin: boolean = false) {
    this._localStorage.removeItem(this.authTokenName);
    if (redirectToLogin) {
      this._router.navigate(['login']).then((r) => noop());
    }
  }


  // makes register request and saves Token
  public register(userRegisterModel: UserRegisterDtoModel): Observable<any> {
    return this.doRegister(userRegisterModel).pipe(
      tap((authToken: any) => {
        this.saveAuthToken(authToken.token);
        return of(true);
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  // makes register request and saves Token
  public login(userLoginModel: UserLoginDtoModel): Observable<any> {
    return this.doLogin(userLoginModel).pipe(
      tap((authToken: any) => {
        this.saveAuthToken(authToken.token);
        return of(true);
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
    // return this.doLogin(userLoginModel);
  }

  private doLogin(userLoginModel: UserLoginDtoModel): Observable<any> {
    return this._http.post<any>(this.baseAuthUrl + '/login', userLoginModel);
  }

  private doRegister(userRegisterModel: UserRegisterDtoModel): Observable<string> {
    return this._http.post<string>(this.baseAuthUrl + '/register', userRegisterModel);
  }

  private saveAuthToken(authToken: string) {
    this._localStorage.setItem(this.authTokenName, authToken);
  }

}
