
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  postUserSettingsForm(userSettings:UserSettings):Observable<UserSettings>{
   return this.http.post('url',userSettings);
    // return of(userSettings);
  }
}
