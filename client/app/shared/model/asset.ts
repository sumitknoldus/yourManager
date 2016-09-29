import {Specs} from "./specs";
export class Asset {
    empId:string;
    empName: string;
    assetType: string;
    model: string;
    assetCode: string;
    shippingDate: Date;
    dateOfIssue: string;
    dateOfReturn: string;
    warrantyEndDate:string;
    lastMaintenanceDate:string;
    specs:Specs;
    isAvailable:boolean;
}
