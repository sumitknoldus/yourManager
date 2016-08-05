import {Component, OnInit, Input} from '@angular/core';
import { NgForm }    from '@angular/forms';
import {SearchService} from './dashboard.service';
import {logistics} from '../shared/model/logistics';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import {Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

//import {LoginService} from '.././login/login.service'

@Component({
    moduleId:module.id,
    selector: 'dashboard',
    providers: [SearchService],
    templateUrl:'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

    search = {};
    constructor(private searchService: SearchService,  private router: Router,  private route: ActivatedRoute){}

    ngOnInit(){}

    onSubmit(){

        this.listByEmpId(this.search.value);
    }

    listByEmpId(empId:string){

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