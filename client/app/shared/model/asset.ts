import {Specs} from './specs';
export class Asset {
    empId:string;
    empName: string;
    assetType: string;
    model: string;
    assetCode: string;
    serialNumber: string;
    shippingDate: string;
    dateOfIssue: string;
    dateOfReturn: string;
    warrantyEndDate: string;
    lastMaintenanceDate:string;
    specs:Specs;
    isAvailable:boolean;

    constructor(){
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
        this.specs = new Specs;
        this.isAvailable = true;
    }
}
