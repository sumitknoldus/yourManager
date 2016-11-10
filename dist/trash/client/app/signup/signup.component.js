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
var signup_service_1 = require('./signup.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
require('rxjs/add/observable/throw');
var SignupComponent = (function () {
    function SignupComponent(router, signupService) {
        this.router = router;
        this.signupService = signupService;
        this.user = {};
    }
    /**
     * This method calls the service to verify the email and then calls the service
     * to get the user signed up
     * @param selectedUser
     */
    SignupComponent.prototype.signup = function (selectedUser) {
        var _this = this;
        selectedUser.role = 'user';
        selectedUser.empId = '';
        swal({
            title: 'Loading...',
            input: 'info',
            showConfirmButton: false
        });
        this.signupService.verification(selectedUser)
            .subscribe(function (data) {
            swal({
                title: '<h4>Verification token has been sent on your Email.</h4>',
                input: 'password',
                inputAttributes: {
                    'maxlength': 10,
                    'autocapitalize': 'off',
                    'autocorrect': 'off'
                },
                inputValidator: function (value) {
                    return new Promise(function (resolve, reject) {
                        if (value !== '') {
                            resolve();
                        }
                        else {
                            reject('You cant left this field empty..!!');
                        }
                    });
                }
            }).then(function (password) {
                _this.signupService.signup(password)
                    .subscribe(function (data) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                    localStorage.setItem('message', data.message);
                    _this.router.navigate(['admin/user']);
                }, function (error) { return swal('Error', '' + error, 'error'); });
            });
        }, function (error) { return swal('Error', '' + error, 'error'); });
    };
    /**
     * This method navigates the user to the login page
     */
    SignupComponent.prototype.goBack = function () {
        this.router.navigate(['login']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SignupComponent.prototype, "user", void 0);
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ym-signup',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css'],
            providers: [signup_service_1.SignupService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, signup_service_1.SignupService])
    ], SignupComponent);
    return SignupComponent;
})();
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map