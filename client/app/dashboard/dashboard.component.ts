import {Component, OnInit} from '@angular/core';
import {SearchService} from './dashboard.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'ym-dashboard',
    templateUrl:'dashboard.component.html',
})

export class DashboardComponent implements OnInit {

    search = {value:''};
    public fullpath:string;
    constructor(private searchService: SearchService,  private router: Router,  private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.fullpath = 'assets/images/sample.png';
    }

    addHardware() {
        this.router.navigate(['asset/add'])
    }

    goToListAllAsset() {
        this.router.navigate(['asset/list'])
    }

    goToAssignAsset(){
        this.router.navigate(['asset/assign'])

    }
    onSubmit() {

        this.listByEmpId(this.search.value);
    }

    listByEmpId(empId:string) {

        this.router.navigate(['/admin',empId]);

        //this.searchService.getAllocatedAssets(empId).subscribe(
        //    res => {
        //        this.allocatedAssetsList = res;
        //
        //
        //    },
        //    error =>  this.errorMessage = <any>error);
    }
}