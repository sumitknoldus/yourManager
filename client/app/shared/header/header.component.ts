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
        if (localStorage.getItem('user') === null) {
            if (this.router.url != '/signup') {
                this.show = false;
                this.router.navigate(['login']);
            } else {
                this.show = false;
            }
        } else {
            if (this.router.url === '/login' || this.router.url === '/signup') {
                this.router.navigate(['home'])
            }
        }
    }
    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}
