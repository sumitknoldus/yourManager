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
var asset_service_1 = require('./asset.service');
require('rxjs/add/observable/throw');
var ClickableAssignComponent = (function () {
    function ClickableAssignComponent(router, assetService) {
        this.router = router;
        this.assetService = assetService;
    }
    ClickableAssignComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    /**
     * This method redirects to the assign asset form
     */
    ClickableAssignComponent.prototype.assignAsset = function () {
        this.router.navigate(['/admin/asset/assign', this.params.data._id]);
    };
    ClickableAssignComponent = __decorate([
        core_1.Component({
            selector: 'clickable-assign-cell',
            template: "\n   <button (click)='assignAsset()' class='btn btn-default btn-sm'>Assign Asset</button>\n    ",
            styles: ['.btn {font-size: inherit; background-color: #26A69A; color: white;margin-top: -6%;}']
        }), 
        __metadata('design:paramtypes', [router_1.Router, asset_service_1.AssetService])
    ], ClickableAssignComponent);
    return ClickableAssignComponent;
}());
exports.ClickableAssignComponent = ClickableAssignComponent;

//# sourceMappingURL=clickable-assign.component.js.map
