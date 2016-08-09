import {Component, OnInit} from '@angular/core';
import { Router,ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'ym-header-shared',
    templateUrl:'header.component.html',
    directives:[ROUTER_DIRECTIVES],
    styleUrls: ['header.css']
})

export class HeaderComponent implements OnInit {

    show: boolean = true;
    constructor(private router: Router) {};

    ngOnInit() {
        if (localStorage.getItem('user') === null) {
            this.show = false;
            this.router.navigate(['/login']);
        }
    }

    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }


}
