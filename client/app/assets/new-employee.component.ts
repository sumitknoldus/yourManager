import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from "../shared/model/asset";
import {AssetService} from "./asset.service";
import 'rxjs/add/observable/throw';


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
            error => swal(
              'error',
              ''+JSON.stringify(error),
              'error'
            )
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
                    error => swal(
                        'error',
                        ''+JSON.stringify(error),
                        'error'
                    )
                )
            },
            errMsg => swal(
                'error',
                ''+JSON.stringify(errMsg),
                'error'
            )
        )
    }
}
