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
        this.errorMsg = '';
    }
    AdminComponent.prototype.listByEmpId = function () {
    };
    AdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin',
            templateUrl: 'admin.component.html',
            styleUrls: ['admin.component.css'],
            providers: [admin_service_1.AdminService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof admin_service_1.AdminService !== 'undefined' && admin_service_1.AdminService) === 'function' && _a) || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a;
})();
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map