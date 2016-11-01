import {Component,Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../shared/model/user";

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
        this.user= JSON.parse(localStorage.getItem('user'));
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('message');
        this.router.navigate(['/home/login']);
    }
}
