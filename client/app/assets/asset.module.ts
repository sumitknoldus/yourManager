import { NgModule }      from '@angular/core';
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
//import {NewUserComponent} from "./new-employee.component";
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';


@NgModule({
  imports:      [ SharedModule, assetRouting, HttpModule, AgGridModule.forRoot(), Ng2DatetimePickerModule ],
  declarations: [ SearchAssetComponent, AddAssetComponent, EditAssetComponent, AssignAssetComponent, ListComponent, UserComponent],
  providers:    [ AssetService, SearchAssetResolve, ListAssetResolve ]
})
export class AssetModule {}
