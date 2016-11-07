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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var asset_service_1 = require("./asset.service");
var router_1 = require("@angular/router");
var clickable_assign_component_1 = require("./clickable-assign.component");
var ListNewAssetComponent = (function () {
    function ListNewAssetComponent(assetService, router, route, datePipe) {
        this.assetService = assetService;
        this.router = router;
        this.route = route;
        this.datePipe = datePipe;
        this.gridOptions = {};
    }
    ListNewAssetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            if (data.assets.length > 0) {
                _this.gridOptions.columnDefs = _this.createColumnDefs(data.assets[0]);
                _this.gridOptions.rowData = _this.createDataRows(data.assets);
                _this.isResult = true;
            }
            else {
                _this.noResultFound = "../../assets/images/no-result.png";
                _this.isResult = false;
            }
        });
    };
    /**
     * This method returns column headers for ag-Grid
     * @param asset
     * @returns {Array}
     */
    ListNewAssetComponent.prototype.createColumnDefs = function (asset) {
        var _this = this;
        var keyNames = Object.keys(asset);
        var headers = [];
        keyNames.filter(function (key) { return key != '__v' && key != '_id' && key != 'empId' &&
            key != 'empName' && key != 'dateOfIssue' && key != 'dateOfReturn'; }).map(function (key) {
            if (key == 'specs') {
                headers.push({
                    headerName: 'SPECIFICATIONS',
                    children: [
                        { headerName: 'HD', field: 'specs.HD', width: 100 },
                        { headerName: 'RAM', field: 'specs.RAM', width: 100 },
                        { headerName: 'PROCESSOR', field: 'specs.Processor', width: 100 }
                    ]
                });
            }
            else {
                headers.push({
                    headerName: _this.getHeaderName(key).toUpperCase(),
                    field: key,
                    width: 140
                });
            }
        });
        headers.push({
            headerName: 'UPDATE',
            field: 'Assign Asset',
            cellRendererFramework: {
                //template: '<button (click) = "editAsset()"> Edit </button>'
                component: clickable_assign_component_1.ClickableAssignComponent
            },
            pinned: 'right',
            width: 140
        });
        return headers;
    };
    ListNewAssetComponent.prototype.getHeaderName = function (key) {
        var newKey = key;
        var capsLetterArray = key.match(/[A-Z]/);
        if (capsLetterArray != null) {
            capsLetterArray.map(function (capitalLetter) { return key = key.replace(capitalLetter, ' ' + capitalLetter.toLowerCase()); });
            newKey = this.getHeaderName(key);
        }
        return newKey;
    };
    /**
     * This method returns rows for the ag-Grid
     * @param assets
     * @returns {Array}
     */
    ListNewAssetComponent.prototype.createDataRows = function (assets) {
        var updatedAssets = [];
        for (var i in assets) {
            updatedAssets.push({
                _id: assets[i]._id,
                empId: assets[i].empId,
                empName: assets[i].empName,
                assetType: assets[i].assetType,
                model: assets[i].model,
                assetCode: assets[i].assetCode,
                serialNumber: assets[i].serialNumber,
                shippingDate: this.datePipe.transform(assets[i].shippingDate, 'yyyy-MM-dd'),
                dateOfIssue: this.datePipe.transform(assets[i].dateOfIssue, 'yyyy-MM-dd'),
                dateOfReturn: this.datePipe.transform(assets[i].dateOfReturn, 'yyyy-MM-dd'),
                warrantyEndDate: this.datePipe.transform(assets[i].warrantyEndDate, 'yyyy-MM-dd'),
                lastMaintenanceDate: this.datePipe.transform(assets[i].lastMaintenanceDate, 'yyyy-MM-dd'),
                specs: assets[i].specs,
                isAvailable: assets[i].isAvailable,
                update: assets[i].update
            });
        }
        return updatedAssets;
    };
    ListNewAssetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ym-list',
            templateUrl: 'search-asset.component.html',
            styleUrls: ['search-asset.component.css'],
        }), 
        __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.Router, router_1.ActivatedRoute, common_1.DatePipe])
    ], ListNewAssetComponent);
    return ListNewAssetComponent;
}());
exports.ListNewAssetComponent = ListNewAssetComponent;

//# sourceMappingURL=list-new-asset.component.js.map
