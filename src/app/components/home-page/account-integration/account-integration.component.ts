import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {noop} from 'rxjs';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserDtoModel} from '../../../models/user-dto.model';
import {UserRegisterDtoModel} from '../../../models/user-register-dto.model';
import {AccountService} from '../../../services/account.service';
import {UserAccountModel} from '../../../models/user-account.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-account-integration',
  templateUrl: './account-integration.component.html',
  styleUrls: ['./account-integration.component.scss']
})
export class AccountIntegrationComponent implements OnInit {

  constructor(private readonly _router: Router,
              private readonly _authService: AuthenticationService,
              private spinner: NgxSpinnerService,
              private readonly _accountService: AccountService) {
  }

  public model = new UserAccountModel();

  ngOnInit() {
    this.spinner.show();
    this._authService.checkTicketExp();
    // const userId = this._accountService.getUserId();
    // if (userId === null) {
    //   this._router.navigate(['login']);
    // }
    this.model.id = this._accountService.getUserId();
    this._accountService.getUserDetails(this.model.id).subscribe((user) => {
        this.model = user;
      }, () => {

      },
      () => {
        this.spinner.hide();
      }
    );
  }

  public logOut() {
    this._router.navigate(['/logout']).then();
  }

  public showAlert() {
    window.alert('You already linked your account with Google!');
  }


}
