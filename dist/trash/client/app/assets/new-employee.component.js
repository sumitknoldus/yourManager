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
var asset_service_1 = require('./asset.service');
require('rxjs/add/observable/throw');
var NewEmployeeComponent = (function () {
    function NewEmployeeComponent(router, assetService) {
        this.router = router;
        this.assetService = assetService;
        this.users = [];
        this.selectedEmployee = {};
        this.isEmpId = false;
    }
    NewEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetService.listEmpEmail().subscribe(function (data) {
            if (data.length > 0) {
                _this.users = data;
                _this.isEmpId = true;
            }
            else {
                _this.isEmpId = false;
            }
        }, function (error) { return swal('error', '' + JSON.stringify(error), 'error'); });
    };
    NewEmployeeComponent.prototype.submit = function () {
        var _this = this;
        this.assetService.assignEmpId(this.selectedEmployee).subscribe(function (data) {
            swal('Success!', 'Employee ID assigned!', 'success');
            _this.selectedEmployee = { empId: '' };
            _this.assetService.listEmpEmail().subscribe(function (data) {
                if (data.length > 0) {
                    _this.users = data;
                    _this.isEmpId = true;
                }
                else {
                    _this.isEmpId = false;
                }
            }, function (error) { return swal('Error', '' + JSON.stringify(error), 'error'); });
        }, function (errMsg) { return swal('Error', '' + JSON.stringify(errMsg), 'error'); });
    };
    NewEmployeeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ym-new-emp',
            templateUrl: 'new-employee.component.html',
            styleUrls: ['add-asset.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, asset_service_1.AssetService])
    ], NewEmployeeComponent);
    return NewEmployeeComponent;
})();
exports.NewEmployeeComponent = NewEmployeeComponent;
//# sourceMappingURL=new-employee.component.js.map