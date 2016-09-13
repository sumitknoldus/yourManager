import { NgModule }      from '@angular/core';
import { HttpModule }  from '@angular/http';
import { AdminComponent }    from './search-asset.component';
import { AdminService } from './asset.service';
import { assetRouting }       from './asset.route';
import { SharedModule }       from '../shared/shared.module';
import {AddAssetComponent} from "./add-asset.component";
import {EditAssetComponent} from "./edit-asset.component";


@NgModule({
  imports:      [ SharedModule, assetRouting, HttpModule ],
  declarations: [ AdminComponent, AddAssetComponent, EditAssetComponent],
  providers:    [ AdminService ]
})
export class AdminModule {}
