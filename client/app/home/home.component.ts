import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'ym-home',
    templateUrl:'home.component.html',
})

export class HomeComponent implements OnInit {

    constructor(private router: Router) {}
    public fullpath:string;

    ngOnInit() {
        this.fullpath = 'assets/images/your.jpg';
    }

}
