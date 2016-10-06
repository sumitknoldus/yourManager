import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from "../shared/model/asset";
import {AssetService} from "./asset.service";
import 'rxjs/add/observable/throw';


@Component({
  moduleId:module.id,
  selector: 'ym-add-asset',
  templateUrl: 'add-asset.component.html',
  styleUrls: ['add-asset.component.css']
})

export class AddAssetComponent {

  constructor(private assetService: AssetService, private router: Router){}

  hardwareTypes = [ "Mouse", "Keyboard", "Laptop", "Monitor", "Adapter", "Laptop Stand", "Bag"]
  isAssign: boolean = false;
  availableAssets = {
    availableStock: "",
    assetList:[{
      assetCode: "",
      _id:""
    }]
  };

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
   * This method calls the service method to add a new asset
   * @param asset
   */
  submit(asset: Asset){

    asset.assetCode = asset.assetCode.replace(/[\s]/g, '');
    this.assetService.addAsset(asset).subscribe(
      res => {
          this.router.navigate(['admin/asset/list'])
          swal({   title: "Asset successfully added.",   text: "I will close in 1 seconds.",   timer: 1000,   showConfirmButton: false });

      },

      error =>  swal(
        'Error',
        ''+JSON.stringify(error),
        'error'
      ))
  }


}
