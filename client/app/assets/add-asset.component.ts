import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from "../shared/model/asset";
import {AdminService} from "./asset.service";

@Component({
  moduleId:module.id,
  selector: 'ym-hardare',
  templateUrl: 'add-asset.component.html',
  styleUrls: ['add-asset.component.css']
})

export class AddHardwareComponent{

  constructor(private assetService: AdminService, private router: Router){}

  hardwareTypes = [ "Mouse", "Keyboard", "Laptop", "Monitor", "Adapter", "Laptop Stand", "Bag"]

  @Input()
  asset = {empId:"",
  empName: "",
  deviceName: "",
  model: "",
  deviceCode: "",
  shippingDate: "",
  dateOfIssue: "",
  dateOfReturn: "",
  warrantyEndDate:"",
  lastMaintenanceDate:"",
  specs:{
    RAM:"",
    HD:"",
    Processor:""
  }
  };

  selectedHardwareType = '';
  @Input() selectedHardwareType;

  addHardware(asset: Asset){
    this.assetService.addAsset(asset).subscribe(
      res => this.router.navigate(['/dashboard']),
      error =>  alert(error))
  }

}
