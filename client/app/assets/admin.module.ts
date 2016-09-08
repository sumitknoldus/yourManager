import { NgModule }      from '@angular/core';
import { HttpModule }  from '@angular/http';
import { AdminComponent }    from './admin.component';
import { AdminService } from './admin.service';
import { adminRouting }       from './admin.route';
import { SharedModule }       from '../shared/shared.module';
import {AddHardwareComponent} from "./add-hardware.component";


@NgModule({
  imports:      [ SharedModule, adminRouting, HttpModule ],
  declarations: [ AdminComponent, AddHardwareComponent],
  providers:    [ AdminService ]
})
export class AdminModule {}
