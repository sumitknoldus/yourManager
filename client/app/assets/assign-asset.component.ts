import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from "../shared/model/asset";
import {User} from "../shared/model/user";
import {AssetService} from "./asset.service";
import 'rxjs/add/observable/throw';

@Component({
  moduleId:module.id,
  selector: 'ym-assign-asset',
  templateUrl: 'add-asset.component.html',
  styleUrls: ['add-asset.component.css']
})

export class AssignAssetComponent{

  constructor(private assetService: AssetService, private router: Router){}

   ngOnInit(){
       this.getAllEmp();
   }

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

  asset = {
    empId:"",
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
    users = [{}];
    selectedEmployee = {email:'',empId:''};
    errorMsg = false;
    users:User = {
        empId:'',
        empName:'',
        email:'',
        firstName:'',
        lastName:'',
        middleName:''
    }

    verifyUserRequest(){
        this.selectedEmployee.assetType = this.asset.assetType;
        this.assetService.verifyUserRequest(this.selectedEmployee).subscribe(data => {
            if(data.status === 203){
                this.errorMsg = true;

            }
            else{
                this.errorMsg = false;
            }
        },error => swal(
            'error',
            ''+JSON.stringify(error),
            'error'
        ))
    }

    getAllEmp(){

      this.assetService.getAllEmp().subscribe(data => {
           this.users = data;

      },error => swal(
          'error',
          ''+JSON.stringify(error),
          'error'
      ))
  }

  /**
   * This method is called when user selects an asset type,
   * it calls the service method to get all the available assets of that type.
   * @param asset
   */
  getAvailableAssetList(asset: string){
    if(asset!=""){
      this.assetService.getAvailableAssetList(asset).subscribe(
        data => {

          this.availableAssets = data;
        },
        error => swal(
          'error',
          ''+JSON.stringify(error),
          'error'
        )
      )
    }
  }

  /**
   * This method calls the service method to assign an asset
   * @param asset
   */
  submit(asset: Asset) {
      this.asset.empId = this.selectedEmployee.empId;
      //this.asset.empName =;
    this.assetService.assignAsset(this.objectId, asset).subscribe(data =>
      {
        this.router.navigate(['admin/asset/list']);
      },
      error => swal(
        'error',
        ''+JSON.stringify(error),
        'error'
      )
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
        error => swal(
          'error',
          ''+JSON.stringify(error),
          'error'
        )
      )
    }
  }

}
