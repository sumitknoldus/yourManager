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
var asset_1 = require('../shared/model/asset');
var user_1 = require('../shared/model/user');
var asset_service_1 = require('./asset.service');
require('rxjs/add/observable/throw');
var ng2_datetime_picker_1 = require('ng2-datetime-picker');
var AssignAssetComponent = (function () {
    function AssignAssetComponent(assetService, router, route) {
        this.assetService = assetService;
        this.router = router;
        this.route = route;
        this.isAssets = true;
        this.hardwareTypes = ['Mouse', 'Keyboard', 'Laptop', 'Monitor', 'Adapter', 'Laptop Stand', 'Bag'];
        this.isAssign = true;
        this.availableAssets = {};
        this.objectId = '';
        this.asset = new asset_1.Asset;
        this.assetCode = '';
        this.objId = '';
        this.isEmpDataAvailable = false;
        this.assignNewAsset = false;
        this.users = [{}];
        this.selectedEmployee = { assetType: '', empId: '' };
        this.errorMsg = false;
        this.users = new user_1.User;
    }
    AssignAssetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            _this.isEmpDataAvailable = true;
            _this.users = data.assets;
        });
        this.route.params.forEach(function (params) {
            if (params.assetCode) {
                _this.objId = params['assetCode'];
                _this.assignNewAsset = true;
            }
        });
        console.log('---------' + this.objId + '+++++++');
        if (this.objId !== '') {
            this.getAsset(this.objId);
        }
    };
    AssignAssetComponent.prototype.verifyUserRequest = function () {
        var _this = this;
        this.selectedEmployee.empId = this.asset.empId;
        this.selectedEmployee.assetType = this.asset.assetType;
        this.assetService.verifyUserRequest(this.selectedEmployee).subscribe(function (data) {
            if (data.status === 203) {
                _this.errorMsg = true;
            }
            else {
                _this.errorMsg = false;
            }
        }, function (error) { return swal('Error', '' + JSON.stringify(error), 'error'); });
    };
    /**
     * This method is called when user selects an asset type,
     * it calls the service method to get all the available assets of that type.
     * @param asset
     */
    AssignAssetComponent.prototype.getAvailableAssetList = function (asset) {
        var _this = this;
        this.asset = new asset_1.Asset;
        this.asset.assetType = asset;
        this.selectedEmployee.empId = '';
        this.assignNewAsset = false;
        this.errorMsg = false;
        if (asset !== '') {
            this.assetService.getAvailableAssetList(asset).subscribe(function (data) {
                _this.availableAssets = data;
                if (_this.availableAssets.availableStock === 0) {
                    _this.isAssets = false;
                }
                else {
                    _this.isAssets = true;
                }
            }, function (error) { return swal('error', '' + JSON.stringify(error), 'error'); });
        }
    };
    /**
     * This method calls the service method to assign an asset
     * @param asset
     */
    AssignAssetComponent.prototype.submit = function () {
        var _this = this;
        var user = this.users.find(function (user) { return user.empId === _this.asset.empId; });
        if (!user.middleName) {
            this.asset.empName = user.firstName + ' ' + user.lastName;
        }
        else {
            this.asset.empName = user.firstName + ' ' + user.middleName + ' ' + user.lastName;
        }
        this.asset.isAvailable = false;
        ng2_datetime_picker_1.DateTime.parse = function (str) { return moment(str).toDate(); };
        var doi = ng2_datetime_picker_1.DateTime.parse(this.asset.dateOfIssue);
        this.asset.dateOfIssue = ng2_datetime_picker_1.DateTime.formatDate(doi, true);
        var sd = ng2_datetime_picker_1.DateTime.parse(this.asset.shippingDate);
        this.asset.shippingDate = ng2_datetime_picker_1.DateTime.formatDate(sd, true);
        if (this.asset.assetType === 'Laptop') {
            var wed = ng2_datetime_picker_1.DateTime.parse(this.asset.warrantyEndDate);
            this.asset.warrantyEndDate = ng2_datetime_picker_1.DateTime.formatDate(wed, true);
        }
        else {
            this.asset.warrantyEndDate = '';
        }
        if (this.asset.lastMaintenanceDate !== '') {
            var lmt = ng2_datetime_picker_1.DateTime.parse(this.asset.lastMaintenanceDate);
            this.asset.lastMaintenanceDate = ng2_datetime_picker_1.DateTime.formatDate(lmt, true);
        }
        this.assetService.assignAsset(this.objectId, this.asset).subscribe(function (data) {
            _this.router.navigate(['admin/asset/list']);
        }, function (error) { return swal('error', '' + JSON.stringify(error), 'error'); });
    };
    /**
     * This method is called when a user selects an assetCode from the available asset list,
     * and calls service to get asset corresponding to that assetCode.
     * @param assetCode
     */
    AssignAssetComponent.prototype.getAsset = function (assetCode) {
        var _this = this;
        var objId;
        if (assetCode !== '') {
            if (this.objId === '') {
                objId = this.availableAssets.assetList.find(function (record) { return record.assetCode === assetCode; })._id;
            }
            else {
                objId = this.objId;
            }
            this.assetService.getById(objId).subscribe(function (data) {
                _this.asset.assetType = data.assetType;
                _this.asset.model = data.model;
                _this.asset.specs.HD = data.specs.HD;
                _this.asset.specs.Processor = data.specs.Processor;
                _this.asset.specs.RAM = data.specs.RAM;
                _this.asset.serialNumber = data.serialNumber;
                _this.objectId = data._id;
                if (_this.assignNewAsset === true)
                    _this.asset.assetCode = data.assetCode;
                ng2_datetime_picker_1.DateTime.formatDate = function (date) { return moment(date).format('YYYY-MM-DD'); };
                _this.asset.shippingDate = ng2_datetime_picker_1.DateTime.formatDate(data.shippingDate, true);
                if (data.lastMaintenanceDate !== null) {
                    _this.asset.lastMaintenanceDate = ng2_datetime_picker_1.DateTime.formatDate(data.lastMaintenanceDate, true);
                }
                if (data.warrantyEndDate !== null) {
                    _this.asset.warrantyEndDate = ng2_datetime_picker_1.DateTime.formatDate(data.warrantyEndDate, true);
                }
            }, function (error) { return swal('error', '' + JSON.stringify(error), 'error'); });
        }
    };
    AssignAssetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ym-assign-asset',
            templateUrl: 'assign-asset.component.html',
            styleUrls: ['add-asset.component.css']
        }), 
        __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.Router, router_1.ActivatedRoute])
    ], AssignAssetComponent);
    return AssignAssetComponent;
}());
exports.AssignAssetComponent = AssignAssetComponent;

//# sourceMappingURL=assign-asset.component.js.map
