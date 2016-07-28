import { Component, OnInit,Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router,ROUTER_DIRECTIVES } from '@angular/router';
//import {DashboardComponent} from './dashboard/dashboard.component';
//import { provideRouter, RouterConfig,ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'my-app',
    template: `
    <h1>Your Manager</h1>
    <h5><i>Manage with ease, then rest and sleep</i></h5>

     <router-outlet></router-outlet>
    `,
    directives:[LoginComponent, ROUTER_DIRECTIVES]

})

//@Injectable()
export class AppComponent implements OnInit{

    constructor(private router: Router){ }

    ngOnInit(){
        this.router.navigate(['/login']);
    }
}
