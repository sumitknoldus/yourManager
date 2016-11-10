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
var asset_service_1 = require('./asset.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var SearchAssetComponent = (function () {
    function SearchAssetComponent(assetService, router, route, datePipe) {
        this.assetService = assetService;
        this.router = router;
        this.route = route;
        this.datePipe = datePipe;
        this.allocatedAssetsList = [];
        this.isResult = false;
        this.noResultIcon = '';
        this.noResultFound = '';
        this.mode = 'Observable';
        this.columnDefs = [];
        this.rowData = [];
        this.headers = [];
        this.errorMessage = '';
        this.gridOptions = {};
    }
    SearchAssetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridOptions.context = {
            assetService: this.assetService,
            gridOptions: this.gridOptions,
            datePipe: this.datePipe,
            createDataRows: this.createDataRows,
            router: this.router
        };
        this.route.data.forEach(function (data) {
            if (data.assets.length > 0) {
                _this.isResult = true;
                _this.columnDefs = _this.createColumnDefs(data.assets[0]);
                _this.rowData = _this.createDataRows(data.assets);
            }
            else {
                _this.noResultIcon = '../../assets/images/warning.png';
                _this.noResultFound = '../../assets/images/no-result.png';
                _this.isResult = false;
            }
        });
    };
    /**
     * This method returns column headers for ag-Grid
     * @param asset
     * @returns {Array}
     */
    SearchAssetComponent.prototype.getHeaderName = function (key) {
        var newKey = key;
        var capsLetterArray = key.match(/[A-Z]/);
        if (capsLetterArray !== null) {
            capsLetterArray.map(function (capitalLetter) { return key = key.replace(capitalLetter, ' ' + capitalLetter.toLowerCase()); });
            newKey = this.getHeaderName(key);
        }
        return newKey;
    };
    SearchAssetComponent.prototype.createColumnDefs = function (asset) {
        var _this = this;
        var keyNames = Object.keys(asset);
        var headers = [];
        keyNames.filter(function (key) { return key !== '__v' && key !== '_id'; }).map(function (key) {
            if (key == 'specs') {
                headers.push({
                    headerName: 'SPECIFICATIONS',
                    children: [
                        { headerName: 'HD', field: 'specs.HD', width: 100 },
                        { headerName: 'RAM', field: 'specs.RAM', width: 100 },
                        { headerName: 'PROCESSOR', field: 'specs.Processor', width: 100 }
                    ]
                });
            }
            else {
                headers.push({
                    headerName: _this.getHeaderName(key).toLocaleUpperCase(),
                    field: key,
                    width: 140
                });
            }
            ;
        });
        headers.push({
            headerName: 'UPDATE',
            field: 'update',
            cellRenderer: this.editAsset,
            pinned: 'right',
            width: 140
        });
        return headers;
    };
    SearchAssetComponent.prototype.editAsset = function (params) {
        var eDiv = document.createElement('div');
        eDiv.innerHTML = '<button style="font-size: inherit; margin-top: -6%;" class="btn btn-sm btn-default btn-simple">Edit' +
            '</button><button style = "margin-left: 3%; font-size: inherit; color: white;margin-top: -6%;" class="btn btn-sm btn-danger return">Return</button>';
        var eButton = eDiv.querySelectorAll('.btn-simple')[0];
        var rButton = eDiv.querySelectorAll('.return')[0];
        if (params.data.dateOfReturn !== null) {
            rButton.setAttribute('disabled', 'true');
        }
        eButton.addEventListener('click', function () {
            params.context.router.navigate(['/admin/asset/edit', params.data._id]);
        });
        rButton.addEventListener('click', function () {
            rButton.removeAttribute('disabled');
            params.context.assetService.returnAsset(params.data._id).subscribe(function (data) {
                params.context.assetService.listAllAsset().subscribe(function (rows) {
                    var dataRows = params.context.createDataRows(rows);
                    params.context.gridOptions.api.setRowData(dataRows);
                    swal({
                        title: 'Asset Returned Successfully.',
                        text: 'Auto close in 1 second.',
                        timer: 1000,
                        showConfirmButton: false
                    }).done();
                }, function (error) {
                    swal('error', '' + JSON.stringify(error), 'error');
                });
            }, function (error) {
                swal('error', '' + JSON.stringify(error), 'error');
            });
        });
        return eDiv;
    };
    /**
     * This method returns rows for the ag-Grid
     * @param assets
     * @returns {Array}
     */
    SearchAssetComponent.prototype.createDataRows = function (assets) {
        var updatedAssets = [];
        for (var i in assets) {
            updatedAssets.push({
                _id: assets[i]._id,
                empId: assets[i].empId,
                empName: assets[i].empName,
                assetType: assets[i].assetType,
                model: assets[i].model,
                assetCode: assets[i].assetCode,
                serialNumber: assets[i].serialNumber,
                shippingDate: this.datePipe.transform(assets[i].shippingDate, 'yyyy-MM-dd'),
                dateOfIssue: this.datePipe.transform(assets[i].dateOfIssue, 'yyyy-MM-dd'),
                dateOfReturn: this.datePipe.transform(assets[i].dateOfReturn, 'yyyy-MM-dd'),
                warrantyEndDate: this.datePipe.transform(assets[i].warrantyEndDate, 'yyyy-MM-dd'),
                lastMaintenanceDate: this.datePipe.transform(assets[i].lastMaintenanceDate, 'yyyy-MM-dd'),
                specs: assets[i].specs,
                isAvailable: assets[i].isAvailable,
                update: assets[i].update
            });
        }
        return updatedAssets;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SearchAssetComponent.prototype, "allocatedAssetsList", void 0);
    SearchAssetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ym-admin',
            templateUrl: 'search-asset.component.html',
            styleUrls: ['search-asset.component.css'],
        }), 
        __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.Router, router_1.ActivatedRoute, common_1.DatePipe])
    ], SearchAssetComponent);
    return SearchAssetComponent;
})();
exports.SearchAssetComponent = SearchAssetComponent;
//# sourceMappingURL=search-asset.component.js.map