import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import {HttpClientModule}from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons'

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent,
    ButtonsModule
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
