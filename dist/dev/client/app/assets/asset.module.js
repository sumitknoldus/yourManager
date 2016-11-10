"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var search_asset_component_1 = require('./search-asset.component');
var asset_service_1 = require('./asset.service');
var asset_route_1 = require('./asset.route');
var shared_module_1 = require('../shared/shared.module');
var add_asset_component_1 = require('./add-asset.component');
var edit_asset_component_1 = require('./edit-asset.component');
var search_asset_resolve_1 = require('./search-asset-resolve');
var assign_asset_component_1 = require('./assign-asset.component');
var list_asset_component_1 = require('./list-asset.component');
var main_1 = require('ag-grid-ng2/main');
var list_asset_resolve_1 = require('./list-asset-resolve');
var user_component_1 = require('./user.component');
var ng2_datetime_picker_1 = require('ng2-datetime-picker');
var list_new_asset_component_1 = require('./list-new-asset.component');
var list_new_asset_resolve_1 = require('./list-new-asset-resolve');
var asset_assign_resolve_1 = require('./asset-assign-resolve');
var AssetModule = (function () {
    function AssetModule() {
    }
    AssetModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, asset_route_1.assetRouting, http_1.HttpModule, main_1.AgGridModule.forRoot(), ng2_datetime_picker_1.Ng2DatetimePickerModule],
            declarations: [search_asset_component_1.SearchAssetComponent, add_asset_component_1.AddAssetComponent, edit_asset_component_1.EditAssetComponent,
                assign_asset_component_1.AssignAssetComponent, list_asset_component_1.ListComponent, user_component_1.UserComponent, list_new_asset_component_1.ListNewAssetComponent],
            providers: [asset_service_1.AssetService, search_asset_resolve_1.SearchAssetResolve, list_asset_resolve_1.ListAssetResolve, list_new_asset_resolve_1.ListNewAssetResolve, asset_assign_resolve_1.AssignAssetResolve, common_1.DatePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AssetModule);
    return AssetModule;
}());
exports.AssetModule = AssetModule;

//# sourceMappingURL=asset.module.js.map
