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

  availableAssets = {
    availableStock: "",
    assetList:[{
      assetCode: "",
      _id:""
    }]
  };

  isAssign: boolean = false;
  objectId = ""

  @Input()
  asset = {empId:"",
    empName: "",
    assetType: "",
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
    },
    isAvailable:""
  };


  addAsset(asset: Asset){
    this.assetService.addAsset(asset).subscribe(
      res => this.router.navigate(['/dashboard']),
      error =>  alert(error))
  }

  getAvailableAssetList(asset: string){
    this.isAssign = true;
    this.assetService.getAvailableAssetList(asset).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.availableAssets = data;
      },
      error => alert(error)
    )
  }

  assignAsset(objectId: string, asset: Asset) {
    this.assetService.assignAsset(objectId, asset).subscribe(data =>
      console.log(JSON.stringify(data)),
      error =>  alert(error)
  )
  }

  getAsset(objectId: string) {
    this.assetService.getById(objectId).subscribe(data =>{
      this.asset = data
    },
      error =>  alert(error)
    )
  }

}
