import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LocalStorageService} from './local-storage.service';
import {Local} from 'protractor/built/driverProviders';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected readonly _baseUrl: string;
  protected readonly _http: HttpClient;
  protected readonly _localStorage: LocalStorageService;
  protected readonly _router: Router;

  constructor(private readonly http: HttpClient,
              private readonly router: Router,
              private readonly localStorage: LocalStorageService) {
    this._http = http;
    this._baseUrl = environment.BASE_URL;
    this._localStorage = localStorage;
    this._router = router;
  }
}
