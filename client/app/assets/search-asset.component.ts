import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {AdminService} from './asset.service';
import {Asset} from '../shared/model/asset';
import {Specs} from '../shared/model/specs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    moduleId:module.id,
    selector: 'ym-admin',
    templateUrl: 'search-asset.component.html',
    styleUrls:['search-asset.component.css'],
})

export class AdminComponent implements OnInit, OnDestroy {
   @Input() public allocatedAssetsList: Asset[];
    private sub: any;
    mode = 'Observable';
    public errorMessage = '';
    public selectedId: string;
    constructor(private adminService: AdminService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.sub = this.route
            .params
            .subscribe(params => {
                this.selectedId = params['id'];
                this.listByEmpId(this.selectedId);

            });

    }

    listByEmpId(empId:string) {

        this.adminService.getAllocatedAssets(empId).subscribe(
            res => {

                this.allocatedAssetsList = res;
            },
            error =>  this.errorMessage = <any>error);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}
