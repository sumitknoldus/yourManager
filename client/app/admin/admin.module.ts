import { NgModule }      from '@angular/core';
import { HttpModule }  from '@angular/http';
import {AdminComponent} from "./admin.component";
import {adminRouting} from "./admin.route";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports:      [ adminRouting, SharedModule, HttpModule ],
  declarations: [ AdminComponent ]
  //providers:    [ ]
})
export class AdminModule {}
