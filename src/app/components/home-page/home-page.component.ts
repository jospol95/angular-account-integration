import { Component, OnInit } from '@angular/core';
import {noop} from 'rxjs';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private readonly router: Router,
              private readonly authService: AuthenticationService,
              ) { }

  ngOnInit() {
  }



}
