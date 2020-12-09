import { Component, OnInit } from '@angular/core';
import {noop} from 'rxjs';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {AccountService} from '../../../services/account.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly authService: AuthenticationService,
  ) { }

  ngOnInit() {
    // TODO: Receive token in url params, then compare and kill that session?
    // TODO 2: Redirect to budgetting app page, then send back here???
    this.logOut();
  }

  public logOut() {
    delay(1000);
    this.authService.killSession();
    this.router.navigate(['auth']).then(() => noop());
  }
}
