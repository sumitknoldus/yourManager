import { NgModule }      from '@angular/core';
import { DatePipe }      from '@angular/common';
import { HttpModule }  from '@angular/http';
import { SearchAssetComponent }    from './search-asset.component';
import { AssetService } from './asset.service';
import { assetRouting }       from './asset.route';
import { SharedModule }       from '../shared/shared.module';
import {AddAssetComponent} from "./add-asset.component";
import {EditAssetComponent} from "./edit-asset.component";
import {SearchAssetResolve} from "./search-asset-resolve";
import {AssignAssetComponent} from "./assign-asset.component";
import {ListComponent} from "./list-asset.component";
import {AgGridModule} from "ag-grid-ng2/main";
import {ListAssetResolve} from "./list-asset-resolve";
import {ClickableComponent} from "./clickable-update.component";
import {UserComponent} from "./user.component";
import {UserGuard} from "../user.guard";
import {AdminGuard} from "../admin.guard";

import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import {ListNewAssetComponent} from "./list-new-asset.component";
import {ListNewAssetResolve} from "./list-new-asset-resolve";
import {AssignAssetResolve} from "./asset-assign-resolve";


@NgModule({
  imports:      [ SharedModule, assetRouting, HttpModule, AgGridModule.forRoot(), Ng2DatetimePickerModule ],
  declarations: [ SearchAssetComponent, AddAssetComponent, EditAssetComponent,
    AssignAssetComponent, ListComponent, UserComponent, ListNewAssetComponent],
  providers:    [ AssetService, SearchAssetResolve, ListAssetResolve, ListNewAssetResolve, AssignAssetResolve, DatePipe]
})
export class AssetModule {}
