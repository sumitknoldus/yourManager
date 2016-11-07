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
var user_1 = require("../shared/model/user");
var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.show = true;
        this.showSidebar = true;
        this.search = { value: '' };
        this.user = new user_1.User();
    }
    ;
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('user');
        localStorage.removeItem('message');
        this.router.navigate(['/home']);
    };
    __decorate([
        core_1.Input, 
        __metadata('design:type', Object)
    ], HeaderComponent.prototype, "user", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ym-header-shared',
            templateUrl: 'header.component.html',
            styleUrls: ['header.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=header.component.js.map
