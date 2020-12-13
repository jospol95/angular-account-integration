import {Injectable, OnInit} from '@angular/core';
import {BaseService} from './service-injector.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UserAccountModel} from '../models/user-account.model';
import {debug} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {

  baseUserUrl: string = this._baseUrl + 'api/user/';
  private readonly authTokenName = 'budget-me-auth-token';
  // constructor() {
  // }
  public helper = new JwtHelperService();


  public getUserId() {
    const decodedToken = this.getTokenDetails();
    return decodedToken.sid;
  }

  private getTokenDetails() {
    const token = this._localStorage.getItemParsed(this.authTokenName);
    return this.helper.decodeToken(token);

  }

  public getUserDetails(id: string) {
    return this._http.get<any>(this.baseUserUrl + id);
  }

}
