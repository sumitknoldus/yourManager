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
var asset_service_1 = require('./asset.service');
require('rxjs/add/observable/throw');
var AddAssetComponent = (function () {
    function AddAssetComponent(assetService, router) {
        this.assetService = assetService;
        this.router = router;
        this.hardwareTypes = ['Mouse', 'Keyboard', 'Laptop', 'Monitor', 'Adapter', 'Laptop Stand', 'Bag'];
        this.isAssign = false;
        this.asset = new asset_1.Asset();
        this.availableAssets = {
            availableStock: '',
            assetList: [{
                    assetCode: '',
                    _id: ''
                }]
        };
    }
    /**
     * This method calls the service method to add a new asset
     * @param asset
     */
    AddAssetComponent.prototype.submit = function (asset) {
        var _this = this;
        asset.assetCode = asset.assetCode.replace(/[\s]/g, '');
        asset.isAvailable = true;
        this.assetService.addAsset(asset).subscribe(function (res) {
            _this.router.navigate(['admin/asset/list-new']);
            swal({
                title: 'Asset successfully added.',
                text: 'Auto close in 1 second.',
                timer: 1000,
                showConfirmButton: false
            }).done();
        }, function (error) { return swal('Error', '' + JSON.stringify(error), 'error'); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddAssetComponent.prototype, "asset", void 0);
    AddAssetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ym-add-asset',
            templateUrl: 'add-asset.component.html',
            styleUrls: ['add-asset.component.css'],
        }), 
        __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.Router])
    ], AddAssetComponent);
    return AddAssetComponent;
})();
exports.AddAssetComponent = AddAssetComponent;
//# sourceMappingURL=add-asset.component.js.map