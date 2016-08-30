import { NgModule }      from '@angular/core';
import { DashboardComponent }    from './dashboard.component';
import { SearchService } from './dashboard.service';
import { dashboardRouting }       from './dashboard.route';
import {SharedModule} from "../shared/shared.module";
import {HttpModule} from '@angular/http'

@NgModule({
    imports:      [ SharedModule, dashboardRouting,HttpModule ],
    declarations: [ DashboardComponent ],
    providers:    [ SearchService ]
})
export class DashboardModule {}
