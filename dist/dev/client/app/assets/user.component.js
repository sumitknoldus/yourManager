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
var router_1 = require("@angular/router");
var asset_service_1 = require("./asset.service");
var Rx_1 = require('rxjs/Rx');
var UserComponent = (function () {
    function UserComponent(assetService, route) {
        this.assetService = assetService;
        this.route = route;
        this.gridOptions = {};
        this.columnDefs = [];
        this.rowData = [];
        this.message = "";
        this.adminMessage = "";
        this.headers = [];
        this.isResult = false;
        this.noResultIcon = '';
        this.noResultFound = '';
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = JSON.parse(localStorage.getItem('user')).empId;
        if (this.id != '') {
            this.assetService.getAllocatedAssets(this.id).subscribe(function (assets) {
                if (assets.length > 0) {
                    _this.columnDefs = _this.createColumnDefs(assets[0]);
                    _this.rowData = _this.createDataRows(assets);
                    _this.isResult = true;
                }
                else {
                    _this.adminMessage = "Contact Admin to get your records added.";
                    _this.noResultIcon = "../../assets/images/warning.png";
                    _this.noResultFound = "../../assets/images/no-result.png";
                    _this.isResult = false;
                }
            }, function (error) { return alert(error); });
        }
        else {
            this.adminMessage = "Contact Admin to get your records added.";
            var name_1 = JSON.parse(localStorage.getItem('user')).firstName;
            if (localStorage.getItem('message')) {
                this.message = "Welcome " + name_1 + ", you have successfully signed up.";
            }
            var timer = Rx_1.Observable.timer(3000);
            timer.subscribe(function (data) { return _this.message = ""; });
            this.noResultIcon = "../../assets/images/warning.png";
            this.noResultFound = "../../assets/images/no-result.png";
        }
    };
    /**
     * This method returns column headers for ag-Grid
     * @param asset
     * @returns {Array}
     */
    UserComponent.prototype.createColumnDefs = function (asset) {
        var keyNames = Object.keys(asset);
        var headers = [];
        keyNames.filter(function (key) { return key != '__v' && key != '_id'; }).map(function (key) {
            headers.push({
                headerName: key,
                field: key,
                width: 100
            });
        });
        return headers;
    };
    /**
     * This method returns rows for the ag-Grid
     * @param assets
     * @returns {Array}
     */
    UserComponent.prototype.createDataRows = function (assets) {
        var updatedAssets = [];
        for (var i in assets) {
            updatedAssets.push({
                _id: assets[i]._id,
                empId: assets[i].empId,
                empName: assets[i].empName,
                assetType: assets[i].assetType,
                model: assets[i].model,
                assetCode: assets[i].assetCode,
                shippingDate: assets[i].shippingDate,
                dateOfIssue: assets[i].dateOfIssue,
                dateOfReturn: assets[i].dateOfReturn,
                warrantyEndDate: assets[i].warrantyEndDate,
                lastMaintenanceDate: assets[i].lastMaintenanceDate,
                specs: JSON.stringify(assets[i].specs),
                isAvailable: assets[i].isAvailable,
                update: assets[i].update
            });
        }
        return updatedAssets;
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            templateUrl: 'user.component.html',
            styleUrls: ['search-asset.component.css'],
        }), 
        __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.ActivatedRoute])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;

//# sourceMappingURL=user.component.js.map
