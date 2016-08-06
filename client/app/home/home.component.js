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
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.checkCredentials();
    }
    HomeComponent.prototype.checkCredentials = function () {
        if (localStorage.getItem('user') === null) {
            this.router.navigate(['/login']);
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ym-home',
            providers: [],
            template: "\n            <div class=\"container\" >\n                <div class=\"content\">\n                    <span> <h1>Welcome to Your manager Application...</h1>\n                    <p>\n                    This application is basically the assets management system. Which manages you're assets automatically.\n\n                    Thanxx...\n                    </p>\n                    </span>\n                    <br />\n                    <!--<a (click)=\"logout()\" href=\"#\">Click Here to logout</a>-->\n                </div>\n            </div>\n    \t"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map