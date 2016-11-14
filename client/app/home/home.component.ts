import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'ym-home',
    templateUrl:'home.component.html',
    styleUrls : ['home.css']
})

export class HomeComponent {
    constructor(private router: Router) {
    }

    goToLogin() {
        if(this.router.url === '/home/login') {
            this.router.navigate(['home']);
        } else {
            this.router.navigate(['home/login']);
        }
    }

    goToSignUp() {
        if(this.router.url === '/home/signup') {
            this.router.navigate(['home']);
        } else {
            this.router.navigate(['home/signup']);
        }
    }

}
