import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Logistics} from "../shared/model/logistics";
import {AdminService} from "./admin.service";

@Component({
  moduleId:module.id,
  selector: 'ym-hardare',
  templateUrl: 'add-hardware.component.html',
  styleUrls: ['add-hardware.component.css']
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

  addHardware(asset: Logistics){
    console.log("asset data of " + this.selectedHardwareType +"::::::::" + JSON.stringify(asset))
    this.assetService.addAsset(asset).subscribe(
      res => this.router.navigate(['/dashboard']),
      error =>  alert(error))
  }
  onSelect(){
    console.log(this.selectedHardwareType)
  }

}
