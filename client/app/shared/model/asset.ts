import {Specs} from "./specs";
export class Asset {
    empId:string;
    empName: string;
    deviceName: string;
    model: string;
    deviceCode: string;
    shippingDate: string;
    dateOfIssue: string;
    dateOfReturn: string;
    warrantyEndDate:string;
    lastMaintenanceDate:string;
    specs:Specs;
}
