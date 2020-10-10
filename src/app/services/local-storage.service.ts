import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public setItem(valueKey: string, value: any) {
    localStorage.setItem(valueKey, value);
  }
}
