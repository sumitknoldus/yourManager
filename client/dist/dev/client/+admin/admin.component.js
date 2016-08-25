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
var admin_service_1 = require('./admin.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var router_1 = require('@angular/router');
var header_component_1 = require('../shared/header/header.component');
var AdminComponent = (function () {
    function AdminComponent(adminService, router, route) {
        this.adminService = adminService;
        this.router = router;
        this.route = route;
        this.mode = 'Observable';
        this.errorMessage = '';
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.selectedId = params['id'];
            _this.listByEmpId(_this.selectedId);
        });
    };
    AdminComponent.prototype.listByEmpId = function (empId) {
        var _this = this;
        this.adminService.getAllocatedAssets(empId).subscribe(function (res) {
            _this.allocatedAssetsList = res;
        }, function (error) { return _this.errorMessage = error; });
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AdminComponent.prototype, "allocatedAssetsList", void 0);
    AdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ym-admin',
            templateUrl: 'admin.component.html',
            styleUrls: ['admin.component.css'],
            providers: [admin_service_1.AdminService],
            directives: [header_component_1.HeaderComponent]
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService, router_1.Router, router_1.ActivatedRoute])
    ], AdminComponent);
    return AdminComponent;
})();
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map