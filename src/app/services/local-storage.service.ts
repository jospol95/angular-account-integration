import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public getItemParsed(valueKey: string) {
    if (localStorage.getItem(valueKey)) {
      return JSON.parse(localStorage.getItem(valueKey));
    }
    return null;
  }

  public removeItem(valueKey: string) {
    localStorage.removeItem(valueKey);
  }

  public setItem(valueKey: string, value: any) {
    localStorage.setItem(valueKey, JSON.stringify(value));
  }
}
