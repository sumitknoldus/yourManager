import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { AdminComponent }    from './admin.component';
import { AdminService } from './admin.service';
import { adminRouting }       from './admin.route';

@NgModule({
    imports:      [ FormsModule,CommonModule, adminRouting ],
    declarations: [ AdminComponent ],
    providers:    [ AdminService ]
})
export class AdminModule {}
