import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular2/router';

@Component({
    selector: 'my-app',
    template: `
    <h1>Your Manager</h1>
    <h5><i>Manage with ease, then rest and sleep</i></h5>
    <login></login>
    `,
    directives:[LoginComponent,ROUTER_DIRECTIVES]

})
@RouteConfig([
    { path: '/home', name: 'Home', component: DashboardComponent, useAsDefault:true },
    { path: '/login', name: 'Login', component: LoginComponent }
])

export class AppComponent { }
