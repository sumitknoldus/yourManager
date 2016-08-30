import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

/* App root*/
import {AppComponent} from './app.component';

/*
 @Feature Modules
**/
import {routing} from './app.routes';

import {LoginModule} from './login/login.module';



@NgModule({
  imports: [
    BrowserModule ,
    routing,
    LoginModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }