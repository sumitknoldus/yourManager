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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var AssetService = (function () {
    function AssetService(http) {
        this.http = http;
        this.listAssetsURL = '/api/assets/list/';
        this.listNewAssetsUrl = '/api/assets/list-new/';
        this.addAssetUrl = '/api/assets/add';
        this.getAssetUrl = '/api/assets/get';
        this.editAssetUrl = '/api/assets/save';
        this.returnAssetUrl = '/api/assets/return';
        this.fetchAvailableAssetUrl = '/api/assets/fetch/';
        this.assignAssetUrl = '/api/assets/assign';
        this.listAllAssetUrl = '/api/assets/listall';
        this.listEmail = '/api/users/listemail';
        this.assignEmpIdUrl = '/api/users/assignempid';
        this.listAllEmp = '/api/users/getallemps';
        this.verifyUserAsset = '/api/assets/verifyuserasset';
    }
    /**
     * Makes a get request to get all assets allocated to a particular employee.
     * @param empId
     * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
     */
    AssetService.prototype.getAllocatedAssets = function (empId) {
        return this.http.get(this.listAssetsURL + empId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AssetService.prototype.getAllEmp = function () {
        return this.http.get(this.listAllEmp)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AssetService.prototype.verifyUserRequest = function (employee) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.verifyUserAsset, employee, { headers: headers })
            .map(this.extractCompleteData)
            .catch(this.handleError);
    };
    /**
     * Makes a post request to add a new asset.
     * @param asset
     * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
     */
    AssetService.prototype.addAsset = function (asset) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        asset.isAvailable = true;
        return this.http
            .post(this.addAssetUrl, JSON.stringify(asset), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Makes a post request to get an Asset by the object ID
     * @param _id
     * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
     */
    AssetService.prototype.getById = function (_id) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.getAssetUrl, JSON.stringify({ '_id': _id }), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Makes a post request to edit an Asset
     * @param asset
     * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
     */
    AssetService.prototype.editAsset = function (asset) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.editAssetUrl, JSON.stringify(asset), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Makes a get request to get all Assets
     * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
     */
    AssetService.prototype.listAllAsset = function () {
        return this.http
            .get(this.listAllAssetUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AssetService.prototype.listNewAssets = function () {
        return this.http
            .get(this.listNewAssetsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AssetService.prototype.listEmpEmail = function () {
        return this.http
            .get(this.listEmail)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Makes a post request to update 'isAvailable' to true by the object ID
     * @param objId
     * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
     */
    AssetService.prototype.returnAsset = function (objId) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.returnAssetUrl, JSON.stringify({ '_id': objId }), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Makes a get request to get all Assets whose 'isAvailable' is true
     * @param assetName
     * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
     */
    AssetService.prototype.getAvailableAssetList = function (assetName) {
        return this.http
            .get(this.fetchAvailableAssetUrl + assetName)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Makes a post request to assign empId to newly signedUp employees
     * @param employee object
     * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
     */
    AssetService.prototype.assignEmpId = function (employee) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.assignEmpIdUrl, employee, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Makes a post request to assign an available asset to an Employee
     * @param objectId
     * @param asset
     * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
     */
    AssetService.prototype.assignAsset = function (objectId, asset) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.assignAssetUrl, { '_id': objectId, 'assetData': asset }, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Returns the data received in JSON format
     * @param res
     * @returns {*|{}}
     */
    AssetService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AssetService.prototype.extractCompleteData = function (res) {
        var body = { result: res.json(), status: res.status, statusText: res.statusText };
        return body || {};
    };
    /**
     * Handles error if there is an error in http request
     * @param error
     * @returns {ErrorObservable}
     */
    AssetService.prototype.handleError = function (error) {
        var errMsg = (error._body) ? error._body : error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    AssetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AssetService);
    return AssetService;
})();
exports.AssetService = AssetService;
//# sourceMappingURL=asset.service.js.map