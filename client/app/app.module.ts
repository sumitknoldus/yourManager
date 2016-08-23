import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {AppComponent} from "./app.component";
import {routing} from "./app.routes";
import {AdminComponent} from "./+admin/admin.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./shared/header/header.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule ,routing, FormsModule, HttpModule],
  declarations: [ AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
