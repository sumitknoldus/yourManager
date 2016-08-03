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

@Component({
    moduleId:module.id,
    selector: 'admin',
    templateUrl: 'admin.component.html',
    styleUrls:['admin.component.css'],
    providers:[AdminService]
})

export class AdminComponent implements OnInit{
   @Input() public allocatedAssetsList: logistics[];
    mode = 'Observable';
    public errorMsg = '';
    constructor(private adminService: AdminService) {
        console.log(JSON.stringify(this.adminService.data));
    }

    ngOnInit(){
        this.listByEmpId("123");
    }
    //ngAfterContentInit() {
    //    this.getAllvaluesFromFiles()
    //        .subscribe(data => {
    //            console.log(this.getSubscribeData);
    //        })
    //}
    listByEmpId(empId:string){

        this.adminService.getAllocatedAssets(empId).subscribe(
        allocatedAssetsList => this.allocatedAssetsList = allocatedAssetsList,
        error =>  this.errorMessage = <any>error);

        console.log(JSON.stringify(this.allocatedAssetsList));
    }
}
