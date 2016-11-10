"use strict";
var specs_1 = require('./specs');
var Asset = (function () {
    function Asset() {
        this.empId = '';
        this.empName = '';
        this.assetType = '';
        this.model = '';
        this.assetCode = '';
        this.serialNumber = '';
        this.shippingDate = '';
        this.dateOfIssue = '';
        this.dateOfReturn = '';
        this.lastMaintenanceDate = '';
        this.warrantyEndDate = '';
        this.specs = new specs_1.Specs;
        this.isAvailable = true;
    }
    return Asset;
}());
exports.Asset = Asset;

//# sourceMappingURL=asset.js.map
