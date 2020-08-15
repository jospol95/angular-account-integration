import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {noop} from 'rxjs';

@Component({
  selector: 'app-account-integration',
  templateUrl: './account-integration.component.html',
  styleUrls: ['./account-integration.component.scss']
})
export class AccountIntegrationComponent implements OnInit {

  constructor(private readonly _router: Router) { }

  ngOnInit() {
  }

  public showAlert() {
    window.alert('You already linked your account with Google!');
  }

  public logOut() {
    this._router.navigate(['/login']).then(() => noop());
  }
}
