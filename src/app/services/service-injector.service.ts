import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LocalStorageService} from './local-storage.service';
import {Local} from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected readonly _baseUrl: string;
  protected readonly _http: HttpClient;
  protected readonly _localStorage: LocalStorageService;

  constructor(private readonly http: HttpClient, private readonly localStorage: LocalStorageService) {
    this._http = http;
    this._baseUrl = environment.baseUrl;
    this._localStorage = localStorage;
  }
}
