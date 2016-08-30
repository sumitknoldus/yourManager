import { NgModule }      from '@angular/core';
import { HttpModule }  from '@angular/http';
import { AdminComponent }    from './admin.component';
import { AdminService } from './admin.service';
import { adminRouting }       from './admin.route';
import { SharedModule }       from '../shared/shared.module';


@NgModule({
  imports:      [ SharedModule, adminRouting, HttpModule ],
  declarations: [ AdminComponent ],
  providers:    [ AdminService ]
})
export class AdminModule {}
