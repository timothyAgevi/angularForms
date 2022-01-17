
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  postUserSettingsForm(userSettings:UserSettings):Observable<any>{
   return this.http.post('https://putsreq.com/m8cjH6bV9wX2sqvWhkm4',userSettings);
    // return of(userSettings);
  }
}
