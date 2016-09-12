import { NgModule }      from '@angular/core';
import { HttpModule }  from '@angular/http';
import { AdminComponent }    from './search-asset.component';
import { AdminService } from './asset.service';
import { assetRouting }       from './asset.route';
import { SharedModule }       from '../shared/shared.module';
import {AddHardwareComponent} from "./add-asset.component";


@NgModule({
  imports:      [ SharedModule, assetRouting, HttpModule ],
  declarations: [ AdminComponent, AddHardwareComponent],
  providers:    [ AdminService ]
})
export class AdminModule {}
