import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from "../shared/model/asset";
import {AssetService} from "./asset.service";

@Component({
  moduleId:module.id,
  selector: 'ym-assign-asset',
  templateUrl: 'add-asset.component.html',
  styleUrls: ['add-asset.component.css']
})

export class AssignAssetComponent{

  constructor(private assetService: AssetService, private router: Router){}

  hardwareTypes = [ "Mouse", "Keyboard", "Laptop", "Monitor", "Adapter", "Laptop Stand", "Bag"]
  isAssign: boolean = true;

  availableAssets = {
    availableStock: "",
    assetList:[{
      assetCode: "",
      _id:""
    }]
  };

  objectId = "";

  @Input()
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


  getAvailableAssetList(asset: string){
    this.assetService.getAvailableAssetList(asset).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.availableAssets = data;
      },
      error => alert(error)
    )
  }

  submit(asset: Asset) {
    this.assetService.assignAsset(this.objectId, asset).subscribe(data =>
        {
          this.router.navigate(['dashboard']);
          //console.log(JSON.stringify(data));
          //this.availableAssets = data;
        },
      error =>  alert(error)
    )
  }

  getAsset(objectId: string) {

    this.assetService.getById(objectId).subscribe(data =>{
        this.asset.shippingDate = data.shippingDate;
        this.asset.model= data.model;
        this.objectId = data._id;
      },
      error =>  alert(error)
    )
  }

}
