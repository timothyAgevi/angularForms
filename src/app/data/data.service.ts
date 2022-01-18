
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http:HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> | undefined {
    return of(['Monthly','Annual','Lifetime']);
  }

  postUserSettingsForm(userSettings:UserSettings):Observable<any>{
   return this.http.post('https://putsreq.com/0awIpYLVplWG7SNCVlTI',userSettings);
    // return of(userSettings);
  }
}
