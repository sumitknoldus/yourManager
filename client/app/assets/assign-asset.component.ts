import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  assetCode = "";
  objId = "";
  isEmpDataAvailable = false;
  assignNewAsset = false;
  constructor(private assetService: AssetService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.data.forEach(data => {
      this.isEmpDataAvailable = true;
      this.users = data.assets;
    });

    this.route.params.forEach((params: Params) => {
      if(params['assetCode'] != null) {
        this.objId = params['assetCode'];
        this.assignNewAsset = true;
      }
    });

    if(this.objId != ""){
      this.getAsset(this.objId)
    }
  }
  isAssets: boolean= true;
  hardwareTypes = [ "Mouse", "Keyboard", "Laptop", "Monitor", "Adapter", "Laptop Stand", "Bag"]
  isAssign: boolean = true;

  availableAssets = {};

  objectId = "";

  asset:Asset = new Asset;

  users = [{}];
  selectedEmployee = {assetType:'',empId:''};
  errorMsg = false;
  users:User = new User;

  verifyUserRequest(){
    this.selectedEmployee.empId = this.asset.empId;
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
      'Error',
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
    this.assignNewAsset = false;
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
  submit() {
    let user = this.users.find(user => user.empId === this.asset.empId)

    if(user.middleName == null) {
      this.asset.empName = user.firstName + ' ' +user.lastName;
    } else {
      this.asset.empName = user.firstName + ' ' + user.middleName + ' ' +user.lastName;
    }
    this.asset.isAvailable = false;

    DateTime.parse = (str: any) => moment(str).toDate();


    let doi = DateTime.parse(this.asset.dateOfIssue);
    this.asset.dateOfIssue = DateTime.formatDate(doi, true);


    let sd = DateTime.parse(this.asset.shippingDate);
    this.asset.shippingDate = DateTime.formatDate(sd, true);

    if(this.asset.assetType == 'Laptop'){
      let wed = DateTime.parse(this.asset.warrantyEndDate);
      this.asset.warrantyEndDate = DateTime.formatDate(wed, true);
    } else{
      this.asset.warrantyEndDate = "";
    }


    if(this.asset.lastMaintenanceDate != ""){
      let lmt = DateTime.parse(this.asset.lastMaintenanceDate);
      this.asset.lastMaintenanceDate = DateTime.formatDate(lmt, true);
    }

    this.assetService.assignAsset(this.objectId, this.asset).subscribe(data =>
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
    let objId;
    if(assetCode != ""){
      if(this.objId == ""){
        objId = this.availableAssets.assetList.find(record => record.assetCode === assetCode)._id
      } else {
        objId = this.objId
      }
      this.assetService.getById(objId).subscribe(data =>{
          this.asset.assetType= data.assetType;
          this.asset.model= data.model;
          this.asset.specs.HD = data.specs.HD;
          this.asset.specs.Processor = data.specs.Processor;
          this.asset.specs.RAM = data.specs.RAM;
          this.asset.serialNumber= data.serialNumber;
          this.objectId = data._id;

          if(this.assignNewAsset == true) this.asset.assetCode = data.assetCode;
          DateTime.formatDate = (date: Date) => moment(date).format('YYYY-MM-DD');
          this.asset.shippingDate = DateTime.formatDate(data.shippingDate, true);
          if(data.lastMaintenanceDate != null) {
            this.asset.lastMaintenanceDate = DateTime.formatDate(data.lastMaintenanceDate, true);
          }
          if(data.warrantyEndDate!= null) {
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
