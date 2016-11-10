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
require('rxjs/add/observable/throw');
var ClickableComponent = (function () {
    function ClickableComponent(router, assetService) {
        this.router = router;
        this.assetService = assetService;
        this.isReturned = false;
    }
    ClickableComponent.prototype.agInit = function (params) {
        this.params = params;
        if (this.params.data.dateOfReturn !== null) {
            this.isReturned = true;
        }
        else {
            this.isReturned = false;
        }
    };
    /**
     * This method redirects to the edit form
     */
    ClickableComponent.prototype.editAsset = function () {
        this.router.navigate(['/admin/asset/edit', this.params.data._id]);
    };
    /**
     * This method calls the service to return an asset
     */
    ClickableComponent.prototype.returnAsset = function () {
        this.assetService.returnAsset(this.params.data._id).subscribe(function (data) {
            location.reload();
        }, function (error) { return swal('error', '' + JSON.stringify(error), 'error'); });
    };
    ClickableComponent = __decorate([
        core_1.Component({
            selector: 'clickable-cell',
            template: "\n   <button (click)='editAsset()' class='btn btn-default btn-sm'> Edit </button>\n   <button (click)='returnAsset()' [disabled]='isReturned' class='btn btn-danger btn-sm'>Return</button>\n    ",
            styles: ['.btn-danger {font-size: inherit; color: white;margin-top: -6%;}',
                '.btn-default {font-size: inherit; color: black;margin-top: -6%;}']
        }), 
        __metadata('design:paramtypes', [router_1.Router, asset_service_1.AssetService])
    ], ClickableComponent);
    return ClickableComponent;
})();
exports.ClickableComponent = ClickableComponent;
//# sourceMappingURL=clickable-update.component.js.map