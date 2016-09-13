import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from "../shared/model/asset";
import {AssetService} from "./asset.service";

@Component({
  moduleId:module.id,
  selector: 'ym-hardware',
  templateUrl: 'add-asset.component.html',
  styleUrls: ['add-asset.component.css']
})

export class AddAssetComponent{

  constructor(private assetService: AssetService, private router: Router){}

  hardwareTypes = [ "Mouse", "Keyboard", "Laptop", "Monitor", "Adapter", "Laptop Stand", "Bag"]

  @Input()
  asset = {empId:"",
  empName: "",
  deviceName: "",
  model: "",
  assetCode: "",
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

  addAsset(asset: Asset){
    this.assetService.addAsset(asset).subscribe(
      res => this.router.navigate(['/dashboard']),
      error =>  alert(error))
  }

}
