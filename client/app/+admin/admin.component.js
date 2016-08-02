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
var AdminComponent = (function () {
    function AdminComponent(adminService) {
        this.adminService = adminService;
        this.mode = 'Observable';
        this.errorMsg = '';
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.listByEmpId("0000");
    };
    AdminComponent.prototype.listByEmpId = function (empId) {
        var _this = this;
        this.adminService.getAllocatedAssets(empId).subscribe(function (allocatedAssetsList) { return _this.allocatedAssetsList = allocatedAssetsList; }, function (error) { return _this.errorMessage = error; });
        console.log(JSON.stringify(this.allocatedAssetsList));
    };
    AdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin',
            templateUrl: 'admin.component.html',
            styleUrls: ['admin.component.css'],
            providers: [admin_service_1.AdminService]
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService])
    ], AdminComponent);
    return AdminComponent;
})();
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map