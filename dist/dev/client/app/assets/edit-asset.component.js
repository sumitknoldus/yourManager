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
var router_1 = require('@angular/router');
var asset_1 = require("../shared/model/asset");
var asset_service_1 = require("./asset.service");
require('rxjs/add/observable/throw');
var ng2_datetime_picker_1 = require("ng2-datetime-picker");
var EditAssetComponent = (function () {
    function EditAssetComponent(assetService, router, route) {
        this.assetService = assetService;
        this.router = router;
        this.route = route;
        this.isAssign = false;
        this.hardwareTypes = ["Mouse", "Keyboard", "Laptop", "Monitor", "Adapter", "Laptop Stand", "Bag"];
        this.isEdit = true;
        this.asset = new asset_1.Asset();
        this.selectedHardwareType = '';
    }
    EditAssetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.getData(id);
        });
    };
    /**
     * This method calls the service get asset by object ID
     * @param id
     */
    EditAssetComponent.prototype.getData = function (id) {
        var _this = this;
        this.assetService.getById(id).subscribe(function (data) {
            _this.asset = data;
            ng2_datetime_picker_1.DateTime.formatDate = function (date) { return moment(date).format('YYYY-MM-DD'); };
            _this.asset.shippingDate = ng2_datetime_picker_1.DateTime.formatDate(data.shippingDate, true);
            if (data.lastMaintenanceDate != null) {
                _this.asset.lastMaintenanceDate = ng2_datetime_picker_1.DateTime.formatDate(data.lastMaintenanceDate, true);
            }
            if (data.shippingDate != null) {
                _this.asset.shippingDate = ng2_datetime_picker_1.DateTime.formatDate(data.shippingDate, true);
            }
            if (data.warrantyEndDate != null) {
                _this.asset.warrantyEndDate = ng2_datetime_picker_1.DateTime.formatDate(data.warrantyEndDate, true);
            }
        }, function (error) { return swal('error', '' + JSON.stringify(error), 'error'); });
    };
    /**
     * This method calls the service method to edit a new asset
     * @param asset
     */
    EditAssetComponent.prototype.submit = function (asset) {
        var _this = this;
        this.assetService.editAsset(asset).subscribe(function (data) { return _this.router.navigate(['admin/asset/list']); }, function (error) { return swal('error', '' + JSON.stringify(error), 'error'); });
    };
    EditAssetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ym-edit-hardware',
            templateUrl: 'add-asset.component.html',
            styleUrls: ['add-asset.component.css']
        }), 
        __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.Router, router_1.ActivatedRoute])
    ], EditAssetComponent);
    return EditAssetComponent;
}());
exports.EditAssetComponent = EditAssetComponent;

//# sourceMappingURL=edit-asset.component.js.map
