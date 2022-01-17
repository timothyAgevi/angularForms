import { Component, OnInit } from '@angular/core'
import { UserSettings } from '../data/user-settings';



@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit{
  userSettings:UserSettings={
    emailOffers:true,
    name:'tim',
    interfaceStyles:'dark',
    subscriptionType:'Annual',
    notes:'oya'
    
  }
  constructor(){}
  
  ngOnInit(): void {
   
  }
  
}