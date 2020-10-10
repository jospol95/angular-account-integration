import {Injectable} from '@angular/core';
import {BaseService} from './service-injector.service';
import {UserRegisterDtoModel} from '../models/user-register-dto.model';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {UserLoginDtoModel} from '../models/user-login-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {

  // constructor() { }
  baseAuthUrl: string = this._baseUrl + 'auth';

  // makes register request and saves Token
  public register(userRegisterModel: UserRegisterDtoModel): Observable<boolean> {
    return this.doRegister(userRegisterModel).pipe(
      map((authToken: string) => {
        this.saveAuthToken(authToken);
        return true;
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }

  // makes register request and saves Token
  public login(userLoginModel: UserLoginDtoModel): Observable<string> {
    // return this.doLogin(userLoginModel).pipe(
    //   map((authToken: string) => {
    //     this.saveAuthToken(authToken);
    //     return true;
    //   }),
    //   catchError((error) => {
    //     return of(error);
    //   })
    // );
    return this.doLogin(userLoginModel);
  }

  private doLogin(userLoginModel: UserLoginDtoModel): Observable<any> {
    return this._http.post<any>(this.baseAuthUrl + '/login', userLoginModel );
  }

  private doRegister(userRegisterModel: UserRegisterDtoModel): Observable<string> {
    return this._http.post<string>(this.baseAuthUrl + '/register', userRegisterModel);
  }

  private saveAuthToken(authToken: string) {
    this._localStorage.setItem('budget-me-auth-token', authToken);
  }

}
