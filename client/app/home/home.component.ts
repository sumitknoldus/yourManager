import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
    moduleId:module.id,
    selector: 'ym-home',
    templateUrl:'home.component.html',
    directives:[ HeaderComponent]
})

export class HomeComponent implements OnInit {

    constructor(private router: Router) {}
    public fullpath:string;

    ngOnInit() {
        this.fullpath = 'assets/images/your.jpg';
    }

}
