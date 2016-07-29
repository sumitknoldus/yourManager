import {Component} from '@angular/core';
import {LoginService} from '.././login/login.service'
import { Router,ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector: 'dashboard',
    providers: [],
    template: `
            <div class="container" >
                <div class="content">
                    <span> <h1>Welcome to Your manager Application...</h1>
                    <p>
                    This application is basically the assets management system. Which manages you're assets automatically.

                    Thanxx...
                    </p>
                    </span>
                    <br />
                    <!--<a (click)="logout()" href="#">Click Here to logout</a>-->
                </div>
            </div>
    	`
})

export class HomeComponent {

    constructor(private router: Router){
        this.checkCredentials();
    }

    checkCredentials(){
        if (localStorage.getItem("user") === null){
            this.router.navigate(['/login']);
        }
    }
}