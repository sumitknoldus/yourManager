import { NgModule }      from '@angular/core';
import { HttpModule }  from '@angular/http';
import { AdminComponent }    from './search-asset.component';
import { AssetService } from './asset.service';
import { assetRouting }       from './asset.route';
import { SharedModule }       from '../shared/shared.module';
import {AddAssetComponent} from "./add-asset.component";
import {EditAssetComponent} from "./edit-asset.component";
import {SearchAssetResolve} from "./search-asset-resolve";
import {AssignAssetComponent} from "./assign-asset.component";
import {ListComponent} from "./list-asset.component";


@NgModule({
  imports:      [ SharedModule, assetRouting, HttpModule ],
  declarations: [ AdminComponent, AddAssetComponent, EditAssetComponent, AssignAssetComponent, ListComponent],
  providers:    [ AssetService, SearchAssetResolve ]
})
export class AdminModule {}
