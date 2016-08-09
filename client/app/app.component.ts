import { Component, OnInit,Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
     <router-outlet></router-outlet>
    `,
    directives:[LoginComponent, ROUTER_DIRECTIVES]
})

@Injectable()
export class AppComponent implements OnInit {

}
