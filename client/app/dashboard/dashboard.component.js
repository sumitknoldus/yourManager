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
var dashboard_service_1 = require('./dashboard.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var router_1 = require('@angular/router');
//import {LoginService} from '.././login/login.service'
var DashboardComponent = (function () {
    function DashboardComponent(searchService, router, route) {
        this.searchService = searchService;
        this.router = router;
        this.route = route;
        this.search = {};
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.onSubmit = function () {
        this.listByEmpId(this.search.value);
    };
    DashboardComponent.prototype.listByEmpId = function (empId) {
        this.router.navigate(['/admin', empId]);
        //this.searchService.getAllocatedAssets(empId).subscribe(
        //    res => {
        //        this.allocatedAssetsList = res;
        //
        //
        //    },
        //    error =>  this.errorMessage = <any>error);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            providers: [dashboard_service_1.SearchService],
            templateUrl: 'dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [dashboard_service_1.SearchService, router_1.Router, router_1.ActivatedRoute])
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map