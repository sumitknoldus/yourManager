import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from "../shared/model/asset";


@Component({
    moduleId:module.id,
    selector: 'ym-new-user',
    templateUrl: 'new-employee.component.html',
    styleUrls: []
})

export class NewUserComponent {

    constructor(private router: Router){}

    submit() {
        this.userService.saveEmpId(this.selectedEmployee).subscribe(data =>
            {
                this.router.navigate(['dashboard']);
            },
            error =>  alert(error)
        )
    }
}
