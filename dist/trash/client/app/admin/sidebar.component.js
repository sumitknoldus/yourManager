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
var user_1 = require('../shared/model/user');
var SidebarComponent = (function () {
    function SidebarComponent(router, el, renderer) {
        this.router = router;
        this.el = el;
        this.renderer = renderer;
        this.l1 = 'inactive';
        this.l2 = 'inactive';
        this.l3 = 'inactive';
        this.l4 = 'inactive';
        this.l5 = 'inactive';
        this.show = true;
        this.showSidebar = true;
        this.search = { value: '' };
        this.user = new user_1.User();
    }
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        var role = JSON.parse(localStorage.getItem('user')).role;
        if (role === 'user') {
            this.showSidebar = false;
        }
    };
    SidebarComponent.prototype.searchAsset = function () {
        var val = this.search.value;
        this.search.value = '';
        this.listByEmpId(val);
    };
    SidebarComponent.prototype.setStyle = function (element) {
        this.renderer.setElementStyle(this.a1.nativeElement, 'backgroundColor', '#2d2d2d');
        this.renderer.setElementStyle(this.a2.nativeElement, 'backgroundColor', '#2d2d2d');
        this.renderer.setElementStyle(this.a3.nativeElement, 'backgroundColor', '#2d2d2d');
        this.renderer.setElementStyle(this.a5.nativeElement, 'backgroundColor', '#2d2d2d');
        this.renderer.setElementStyle(this.a4.nativeElement, 'backgroundColor', '#2d2d2d');
        this.applyStyle(element);
    };
    SidebarComponent.prototype.applyStyle = function (element) {
        switch (element) {
            case 'a1':
                this.l1 = 'active';
                this.l2 = 'inactive';
                this.l3 = 'inactive';
                this.l4 = 'inactive';
                this.l5 = 'inactive';
                this.renderer.setElementStyle(this.a1.nativeElement, 'backgroundColor', '#26A69A');
                break;
            case 'a2':
                this.l1 = 'inactive';
                this.l2 = 'active';
                this.l3 = 'inactive';
                this.l4 = 'inactive';
                this.l5 = 'inactive';
                this.renderer.setElementStyle(this.a2.nativeElement, 'backgroundColor', '#26A69A');
                break;
            case 'a3':
                this.l1 = 'inactive';
                this.l2 = 'inactive';
                this.l3 = 'active';
                this.l4 = 'inactive';
                this.l5 = 'inactive';
                this.renderer.setElementStyle(this.a3.nativeElement, 'backgroundColor', '#26A69A');
                break;
            case 'a4':
                this.l1 = 'inactive';
                this.l2 = 'inactive';
                this.l3 = 'inactive';
                this.l4 = 'active';
                this.l5 = 'inactive';
                this.renderer.setElementStyle(this.a4.nativeElement, 'backgroundColor', '#26A69A');
                break;
            case 'a5':
                this.l1 = 'inactive';
                this.l2 = 'inactive';
                this.l3 = 'inactive';
                this.l4 = 'inactive';
                this.l5 = 'active';
                this.renderer.setElementStyle(this.a5.nativeElement, 'backgroundColor', '#26A69A');
                break;
        }
    };
    SidebarComponent.prototype.listByEmpId = function (empId) {
        this.router.navigate(['/admin/admin', empId]);
    };
    __decorate([
        core_1.ViewChild('a1', ''), 
        __metadata('design:type', core_1.ElementRef)
    ], SidebarComponent.prototype, "a1", void 0);
    __decorate([
        core_1.ViewChild('a2', ''), 
        __metadata('design:type', core_1.ElementRef)
    ], SidebarComponent.prototype, "a2", void 0);
    __decorate([
        core_1.ViewChild('a3', ''), 
        __metadata('design:type', core_1.ElementRef)
    ], SidebarComponent.prototype, "a3", void 0);
    __decorate([
        core_1.ViewChild('a4', ''), 
        __metadata('design:type', core_1.ElementRef)
    ], SidebarComponent.prototype, "a4", void 0);
    __decorate([
        core_1.ViewChild('a5', ''), 
        __metadata('design:type', core_1.ElementRef)
    ], SidebarComponent.prototype, "a5", void 0);
    __decorate([
        core_1.Input, 
        __metadata('design:type', Object)
    ], SidebarComponent.prototype, "user", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ym-sidebar-shared',
            templateUrl: 'sidebar.component.html',
            styleUrls: ['header.css'],
            animations: [
                core_1.trigger('heroState', [
                    core_1.state('inactive', core_1.style({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    core_1.state('active', core_1.style({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.1)'
                    })),
                    core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                    core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef, core_1.Renderer])
    ], SidebarComponent);
    return SidebarComponent;
})();
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map