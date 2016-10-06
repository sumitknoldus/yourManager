import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';


/* App root*/
import {AppComponent} from './app.component';

/*
 @Feature Modules
 **/
import {routing} from './app.routes';

import {LoginModule} from './login/login.module';
import {AssetModule} from './assets/asset.module';
import {HomeModule} from './home/home.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {SignupModule} from "./signup/signup.module";
import {AdminGuard} from "./admin.guard";
import {UserGuard} from "./user.guard";
import {LoginGuard} from "./login.guard";
import {AdminModule} from "./admin/admin.module";
//noinspection TypeScriptCheckImport
import { Ng2DatetimePickerModule, DateTime } from 'ng2-datetime-picker';



@NgModule({
  imports: [
    BrowserModule ,
    routing,
    LoginModule,
    SignupModule,
    DashboardModule,
    HomeModule,
    AssetModule,
    AdminModule,
    Ng2DatetimePickerModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [LoginGuard, UserGuard, AdminGuard]

})
export class AppModule { }
