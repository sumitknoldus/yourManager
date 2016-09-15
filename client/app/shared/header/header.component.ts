import {Component,Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../model/user";

@Component({
    moduleId:module.id,
    selector: 'ym-header-shared',
    templateUrl:'header.component.html',
    styleUrls: ['header.css']
})

export class HeaderComponent implements OnInit {
    show: boolean = true;
    @Input
    user = {firstName:''};
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
            console.log(localStorage.getItem('user'));
            this.user= localStorage.getItem('user');
            this.firstName = localStorage.getItem('user');
            alert(this.user);
            this.email = localStorage.getItem('user').email;
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
