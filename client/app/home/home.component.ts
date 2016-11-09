import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'ym-home',
    templateUrl:'home.component.html',
})

export class HomeComponent implements OnInit {

    public fullpath:string;
    constructor(private router: Router) {}


    ngOnInit() {
        this.fullpath = 'assets/images/your.jpg';
    }

}
