import { NgModule }      from '@angular/core';
import { HttpModule }  from '@angular/http';
import {AdminComponent} from "./admin.component";
import {adminRouting} from "./admin.route";
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from "./header.component";
import {SidebarComponent} from "./sidebar.component";
import {NewEmployeeComponent} from "../assets/new-employee.component";


@NgModule({
  imports:      [ adminRouting, SharedModule, HttpModule ],
  declarations: [ AdminComponent,HeaderComponent,SidebarComponent, NewEmployeeComponent ]

})
export class AdminModule {}
