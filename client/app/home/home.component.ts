import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'ym-home',
    templateUrl:'home.component.html',
    styleUrls : ['home.css']
})

export class HomeComponent implements OnInit {

    constructor(private router: Router) {
    }

    goToLogin(){
        this.router.navigate(['home/login'])
    }

    goToSignUp(){
        this.router.navigate(['home/signup'])
    }

}
