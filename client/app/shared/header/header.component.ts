import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'ym-header-shared',
    templateUrl:'header.component.html',
    styleUrls: ['header.css']
})

export class HeaderComponent implements OnInit {
    show: boolean = true;
    constructor(private router: Router) {};
    ngOnInit() {
        if (localStorage.getItem('user') === null && this.router.url != '/signup') {
            this.show = false;
            this.router.navigate(['/login']);
        }
    }
    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}
