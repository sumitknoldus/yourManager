import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from "../shared/model/asset";
import {AssetService} from "./asset.service";


@Component({
    moduleId:module.id,
    selector: 'ym-new-emp',
    templateUrl: 'new-employee.component.html',
    styleUrls: []
})

export class NewEmployeeComponent {

    constructor(private router: Router, private assetService: AssetService){}

    users = [];
    selectedEmployee = {};

    ngOnInit(){
        this.assetService.listEmpEmail().subscribe(
            data => {
                this.users = data;
            },
            error => alert(error)
        )
    }

    submit() {
        this.assetService.assignEmpId(this.selectedEmployee).subscribe(data => {
                swal(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                );
                this.assetService.listEmpEmail().subscribe(
                    data => {
                        this.users = data;
                    },
                    error => console.log("+++++++++++++"+JSON.stringify(error))
                )
            },
            error =>  console.log( ">>>>>>>>>>>>>>>"+JSON.stringify(error))
        )
    }
}
