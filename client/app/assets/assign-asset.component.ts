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

  /**
   * This method is called when user selects an asset type,
   * it calls the service method to get all the available assets of that type.
   * @param asset
   */
  getAvailableAssetList(asset: string){
    if(asset!=""){
      this.assetService.getAvailableAssetList(asset).subscribe(
        data => {
          console.log(JSON.stringify(data));
          this.availableAssets = data;
        },
        error => alert(error)
      )
    }
  }

  /**
   * This method calls the service method to assign an asset
   * @param asset
   */
  submit(asset: Asset) {
    this.assetService.assignAsset(this.objectId, asset).subscribe(data =>
      {
        this.router.navigate(['admin/asset/list']);
      },
      error =>  alert(error)
    )
  }

  /**
   * This method is called when a user selects an assetCode from the available asset list,
   * and calls service to get asset corresponding to that assetCode.
   * @param assetCode
   */
  getAsset(assetCode: string) {
    if(assetCode != ""){
      let objId = this.availableAssets.assetList.find(record => record.assetCode === assetCode)._id
      this.assetService.getById(objId).subscribe(data =>{
          this.asset.shippingDate = data.shippingDate;
          this.asset.model= data.model;
          this.asset.warrantyEndDate= data.warrantyEndDate;
          this.asset.lastMaintenanceDate= data.lastMaintenanceDate;
          this.asset.specs= data.specs;
          this.objectId = data._id;
        },
        error =>  alert(error)
      )
    }
  }

}
