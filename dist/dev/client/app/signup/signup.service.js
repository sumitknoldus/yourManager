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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var SignupService = (function () {
    function SignupService(http) {
        this.http = http;
        this.postUrl = '/api/users/signup';
        this.verify = '/api/users/verify';
    }
    /**
     * This service makes a post request and sends the user data for signup
     * @param user
     * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
     */
    SignupService.prototype.verification = function (user) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.verify, JSON.stringify(user), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * This service makes a post requests with the unique token to get the user signed up
     * @param token
     * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
     */
    SignupService.prototype.signup = function (token) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.postUrl, JSON.stringify({ verificationToken: token }), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Returns the data received in JSON format
     * @param res
     * @returns {*|{}}
     */
    SignupService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    /**
     * Handles error if there is an error in http request
     * @param error
     * @returns {ErrorObservable}
     */
    SignupService.prototype.handleError = function (error) {
        console.log(JSON.stringify(error));
        var errMsg = (error._body) ? error._body :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    SignupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SignupService);
    return SignupService;
}());
exports.SignupService = SignupService;

//# sourceMappingURL=signup.service.js.map
