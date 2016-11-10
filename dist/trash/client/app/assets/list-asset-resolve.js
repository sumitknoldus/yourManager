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
var asset_service_1 = require('./asset.service');
var ListAssetResolve = (function () {
    function ListAssetResolve(assetService, router) {
        this.assetService = assetService;
        this.router = router;
    }
    /**
     * This method calls the service to get all assets.
     * @param route
     * @returns {any}
     */
    ListAssetResolve.prototype.resolve = function (route) {
        return this.assetService.listAllAsset().map(function (assets) {
            if (assets) {
                return assets;
            }
            else {
                return false;
            }
        });
    };
    ListAssetResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.Router])
    ], ListAssetResolve);
    return ListAssetResolve;
})();
exports.ListAssetResolve = ListAssetResolve;
//# sourceMappingURL=list-asset-resolve.js.map