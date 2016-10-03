import {Component,Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../shared/model/user";

@Component({
    moduleId:module.id,
    selector: 'ym-sidebar-shared',
    templateUrl:'sidebar.component.html',
    styleUrls: ['header.css']
})

export class SidebarComponent implements OnInit {
    show: boolean = true;
    showSidebar: boolean = true;
    search = {value:''};
    @Input
    user = new User();
    constructor(private router: Router) {};

    ngOnInit() {
        let role = JSON.parse(localStorage.getItem('user')).role;
        console.log("=================" + role);
        if (role === 'user') this.showSidebar = false
    }

    searchAsset() {
        this.listByEmpId(this.search.value);
    }

    listByEmpId(empId:string) {
        this.router.navigate(['/admin/admin',empId]);
    }
}
