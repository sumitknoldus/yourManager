import { Component, Input, OnInit } from '@angular/core';
import {AdminService} from './admin.service';
import {logistics} from '../shared/model/logistics';

@Component({
    moduleId:module.id,
    selector: 'admin',
    templateUrl: 'admin.component.html',
    styleUrls:['admin.component.css'],
    providers:[AdminService]
})

export class AdminComponent implements OnInit{
    allocatedAssetsList: logistics[];
    mode = 'Observable';
    public errorMsg = '';
    constructor(private adminService: AdminService) {}

    ngOnInit(){

        this.listByEmpId("0000")
    }
    listByEmpId(empId:string){

        this.adminService.getAllocatedAssets(empId).subscribe(
        allocatedAssetsList => this.allocatedAssetsList = allocatedAssetsList,
        error =>  this.errorMessage = <any>error);
        console.log(JSON.stringify(this.allocatedAssetsList));
    }
}
