import {Component, OnInit} from '@angular/core';
import { Router,ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
    moduleId:module.id,
    selector: 'ym-home',
    templateUrl:'home.component.html',
    directives:[ROUTER_DIRECTIVES, HeaderComponent]
})

export class HomeComponent implements OnInit {

    constructor(private router: Router) {}
    public fullpath:string;

    ngOnInit() {
        this.fullpath = 'assets/images/your.jpg';
    }

}
