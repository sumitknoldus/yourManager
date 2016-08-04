import { Component, Input, OnInit } from '@angular/core';
import {AdminService} from './admin.service';
import {logistics} from '../shared/model/logistics';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import {Response } from '@angular/http';
@Component({
    moduleId:module.id,
    selector: 'admin',
    templateUrl: 'admin.component.html',
    styleUrls:['admin.component.css'],
    providers:[AdminService]
})

export class AdminComponent implements OnInit{
   @Input() public allocatedAssetsList: logistics[];

    body = {};
    mode = 'Observable';
    public errorMsg = '';
    constructor(private adminService: AdminService) {

    }

    ngOnInit(){
        this.listByEmpId("123");

    }

    listByEmpId(empId:string){

        this.adminService.getAllocatedAssets(empId).subscribe(
            res => {
                this.allocatedAssetsList = res;
                console.log(JSON.stringify(this.allocatedAssetsList));
            },
            error =>  this.errorMessage = <any>error);
    }



}
