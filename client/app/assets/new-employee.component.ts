import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AssetService} from './asset.service';
import 'rxjs/add/observable/throw';


@Component({
    moduleId:module.id,
    selector: 'ym-new-emp',
    templateUrl: 'new-employee.component.html',
    styleUrls: ['add-asset.component.css']
})

export class NewEmployeeComponent {


    users = [];
    selectedEmployee = {};
    isEmpId : boolean= false;
    constructor(private router: Router, private assetService: AssetService) {}
    ngOnInit() {
        this.assetService.listEmpEmail().subscribe(
            data => {
                if(data.length > 0) {
                    this.users = data;
                    this.isEmpId = true;
                } else {
                    this.isEmpId = false;
                }
            },
            error => swal(
              'error',
              ''+JSON.stringify(error),
              'error'
            )
        );
    }

    submit() {
        this.assetService.assignEmpId(this.selectedEmployee).subscribe(data => {
                swal(
                    'Success!',
                    'Employee ID assigned!',
                    'success'
                );

                this.selectedEmployee = {empId:''};
                this.assetService.listEmpEmail().subscribe(
                    data => {
                        if(data.length > 0) {
                            this.users = data;
                            this.isEmpId = true;
                        } else {
                            this.isEmpId = false;
                        }
                    },
                    error => swal(
                        'Error',
                        ''+JSON.stringify(error),
                        'error'
                    )
                );
            },
            errMsg => swal(
                'Error',
                ''+JSON.stringify(errMsg),
                'error'
            )
        );
    }
}
