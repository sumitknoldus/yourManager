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
var user_1 = require('../shared/model/user');
var AdminComponent = (function () {
    function AdminComponent(router) {
        this.router = router;
        this.show = true;
        this.showSidebar = true;
        this.search = { value: '' };
        this.user = new user_1.User();
    }
    ;
    AdminComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user') === null) {
            this.showSidebar = false;
            this.show = false;
        }
        else {
            this.show = true;
            if (JSON.parse(localStorage.getItem('user')).role === 'user') {
                this.showSidebar = false;
            }
            this.user = JSON.parse(localStorage.getItem('user'));
        }
    };
    __decorate([
        core_1.Input, 
        __metadata('design:type', Object)
    ], AdminComponent.prototype, "user", void 0);
    AdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'admin.component.html',
            styleUrls: ['admin.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;

//# sourceMappingURL=admin.component.js.map
