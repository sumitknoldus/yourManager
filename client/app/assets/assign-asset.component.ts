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
  asset: Asset = new Asset();


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

  submit(asset: Asset) {
    console.log("assign asset --------" + JSON.stringify(asset))
    this.assetService.assignAsset(asset).subscribe(data =>
        console.log(JSON.stringify(data)),
      error =>  alert(error)
    )
  }

  getAsset(objectId: string) {
    this.assetService.getById(objectId).subscribe(data =>{
        this.asset.shippingDate = data.shippingDate;
        this.asset.model= data.model;
      },
      error =>  alert(error)
    )
  }

}
