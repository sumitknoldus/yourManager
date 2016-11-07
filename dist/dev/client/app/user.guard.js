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
var UserGuard = (function () {
    function UserGuard(router) {
        this.router = router;
    }
    /**Overriding canActivate to guard routes
     *
     * This method returns true if the logged in user's role is 'user'
     * @returns {boolean}
     */
    UserGuard.prototype.canActivate = function () {
        if (localStorage.getItem('user') != null && JSON.parse(localStorage.getItem('user')).role === 'user') {
            return true;
        }
        else if (localStorage.getItem('user') === null) {
            this.router.navigate(['home']);
        }
        else {
            this.router.navigate(['admin/asset/list']);
            return false;
        }
    };
    UserGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], UserGuard);
    return UserGuard;
}());
exports.UserGuard = UserGuard;

//# sourceMappingURL=user.guard.js.map
