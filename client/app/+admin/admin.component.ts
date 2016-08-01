import { Component, Input } from '@angular/core';

import {AdminService} from './admin.service';

@Component({
    moduleId:module.id,
    selector: 'admin',
    templateUrl: 'admin.component.html',
    styleUrls:['admin.component.css'],
    providers:[AdminService]
})


export class AdminComponent {
    public errorMsg = '';
    constructor(private adminService: AdminService) {}

    listByEmpId(){

    }
}
