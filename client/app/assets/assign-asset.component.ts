import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from "../shared/model/asset";
import {User} from "../shared/model/user";
import {AssetService} from "./asset.service";
import 'rxjs/add/observable/throw';
import {DateTime} from "ng2-datetime-picker";

@Component({
  moduleId:module.id,
  selector: 'ym-assign-asset',
  templateUrl: 'assign-asset.component.html',
  styleUrls: ['add-asset.component.css']
})

export class AssignAssetComponent{

  constructor(private assetService: AssetService, private router: Router){}

  ngOnInit(){
    this.getAllEmp();
  }
  isAssets: boolean= true;
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

  asset:Asset = new Asset;

  users = [{}];
  selectedEmployee = {email:'',empId:''};
  errorMsg = false;
  users:User = new User;

  verifyUserRequest(){
    this.selectedEmployee.assetType = this.asset.assetType;
    this.assetService.verifyUserRequest(this.selectedEmployee).subscribe(data => {
      if(data.status === 203){
        this.errorMsg = true;
        //this.asset = {}
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
    this.asset = new Asset;
    this.asset.assetType = asset;
    this.selectedEmployee.empId = '';
    this.errorMsg = false;
    if(asset!=""){
      this.assetService.getAvailableAssetList(asset).subscribe(
        data => {
          this.availableAssets = data;
          if(this.availableAssets.availableStock === 0){
            this.isAssets = false;
          }
          else{
            this.isAssets = true;
          }
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
          this.asset.model= data.model;
          this.asset.specs= data.specs;
          this.objectId = data._id;
          DateTime.formatDate = (date: Date) => moment(date).format('DD-MM-YYYY');
          this.asset.shippingDate = DateTime.formatDate(data.shippingDate, true);
          if(data.lastMaintenanceDate != "") {
            this.asset.lastMaintenanceDate = DateTime.formatDate(data.lastMaintenanceDate, true);
          }
          if(data.warrantyEndDate!= "") {
            this.asset.warrantyEndDate = DateTime.formatDate(data.warrantyEndDate, true);
          }
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
