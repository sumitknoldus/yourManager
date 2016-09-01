import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';


/* App root*/
import {AppComponent} from './app.component';

/*
 @Feature Modules
**/
import {routing} from './app.routes';

import {LoginModule} from './login/login.module';
import {AdminModule} from './+admin/admin.module';
import {HomeModule} from './home/home.module';
import {SignupModule} from "./signup/signup.module";


@NgModule({
  imports: [
    BrowserModule ,
    routing,
    LoginModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
