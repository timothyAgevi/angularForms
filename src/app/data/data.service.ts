import { Injectable } from '@angular/core';
import { off } from 'process';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  postUserSettingsForm(userSettings:UserSettings):Observable<UserSettings>{
return of(userSettings);
  }
}
