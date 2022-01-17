import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { UserSettings } from '../data/user-settings';



@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit{
  originalUserSettings:UserSettings={
    emailOffers:false,
    name:'',
    interfaceStyles:'',
    subscriptionType:'',
    notes:''
    
  }
  //copy of originalUserSettings
  userSettings:UserSettings={...this.originalUserSettings}
  constructor(){}
  
  ngOnInit(): void {
   
  }
  onSubmit(form:NgForm){
    console.log( 'in onsubmit' ,form.valid)

  }
}