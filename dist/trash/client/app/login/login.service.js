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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = '/api/users/signin';
    }
    /**
     * This method makes a post call to get the user logged in to the application.
     * It returns user object in response if the credentials are correct
     * @param user
     * @returns {any<T>|Promise<*>|Promise<R>|Promise<T>|any}
     */
    LoginService.prototype.login = function (user) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.loginUrl, JSON.stringify(user), { headers: headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Handles error if there is an error in http request
     * @param error
     * @returns {ErrorObservable}
     */
    LoginService.prototype.handleError = function (error) {
        var errMsg = (error._body) ? error._body :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    /**
     * Returns the data received in JSON format
     * @param res
     * @returns {*|{}}
     */
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
})();
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map