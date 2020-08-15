import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {noop} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goToHomePage() {
    this._router.navigate(['/home']).then(() => noop());
  }
}
