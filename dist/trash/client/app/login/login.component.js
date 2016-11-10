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
var user_1 = require('../shared/model/user');
var login_service_1 = require('./login.service');
var router_1 = require('@angular/router');
require('rxjs/add/observable/throw');
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.errorMsg = '';
        this.user = {};
    }
    /**
     * This method is called when user clicks on login.
     * It calls the service to get the user logged in,
     * and redirects it to the page depending on the user role.
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.user)
            .then(function (data) {
            if (JSON.stringify(data) !== '{}') {
                localStorage.setItem('user', JSON.stringify(data));
                if (data.role === 'user') {
                    _this.router.navigate(['admin/user']);
                }
                else {
                    _this.router.navigate(['admin/asset/list']);
                }
            }
            else {
                _this.errorMsg = 'Failed to login...';
            }
        }, function (error) { return swal('error', 'Invalid Username or Password', 'error'); });
    };
    /**
     * this method navigates the user to sign up page.
     */
    LoginComponent.prototype.goToSignup = function () {
        this.router.navigate(['signup']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], LoginComponent.prototype, "user", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ym-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css'],
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map