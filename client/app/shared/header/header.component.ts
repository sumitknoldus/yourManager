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
    showSidebar: boolean = true;
    search = {value:''};
    @Input
    user = new User();
    constructor(private router: Router) {};

    ngOnInit() {

        if (localStorage.getItem('user') === null) {
            if (this.router.url != '/signup') {
                this.showSidebar = false;
                this.show = false;
                this.router.navigate(['login']);
            } else {
                this.show = false;
                this.showSidebar = false;
            }
        } else {
            this.show= true;
            if(JSON.parse(localStorage.getItem('user')).role === 'user'){
                this.showSidebar = false;
            }

            this.user= JSON.parse(localStorage.getItem('user'));
            if (this.router.url === '/login' || this.router.url === '/signup') {
                this.router.navigate(['home'])
            }
        }
    }

    searchAsset() {
        this.listByEmpId(this.search.value);
    }

    listByEmpId(empId:string) {
        this.router.navigate(['/admin',empId]);
    }

    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}
