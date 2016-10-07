import {Component} from '@angular/core';

import {Router, ActivatedRoute, Params} from "@angular/router";
import {AssetService} from "./asset.service";
import {OnInit} from "angular2/core";
import {GridOptions} from "ag-grid/main";
import {Asset} from "../shared/model/asset";
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  styleUrls:['search-asset.component.css'],
})

export class UserComponent {

  private gridOptions:GridOptions =  <GridOptions>{};
  private columnDefs = [];
  private rowData = [];
  message = "";
  id;

  constructor(private assetService: AssetService, private route: ActivatedRoute){}
  headers = [];
  isResult = false;
  noResultIcon ='';
  noResultFound='';
  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem('user')).empId;
    if(this.id != ''){
      this.assetService.getAllocatedAssets(this.id).subscribe(
        assets => {
          if(assets.length > 0) {
            this.columnDefs = this.createColumnDefs(assets[0]);
            this.rowData = this.createDataRows(assets);
            this.isResult = true;
          } else {
            this.noResultIcon = "../../assets/images/warning.png";
            this.noResultFound = "../../assets/images/no-result.png";
            this.isResult = false;
          }
        },
        error => alert(error)
      )
    } else{
      let name = JSON.parse(localStorage.getItem('user')).firstName;
      if(JSON.parse(localStorage.getItem('user')).showMessage){
        this.message = "Welcome " + name + ", you have successfully signed up.";
      }
      let timer = Observable.timer(5000);
      timer.subscribe(data => this.message = "")
      this.noResultIcon = "../../assets/images/warning.png";
      this.noResultFound = "../../assets/images/no-result.png";
    }
  }

  /**
   * This method returns column headers for ag-Grid
   * @param asset
   * @returns {Array}
   */
  private createColumnDefs(asset) {
    let keyNames = Object.keys(asset);
    let headers = [];
    keyNames.filter(key => key != '__v' && key != '_id').map(key => {
      headers.push({
        headerName: key,
        field: key,
        width: 100
      })
    });

    return headers;
  }

  /**
   * This method returns rows for the ag-Grid
   * @param assets
   * @returns {Array}
   */
  private createDataRows(assets) {
    let updatedAssets = [];
    for(let i in assets){
      updatedAssets.push({
        _id:assets[i]._id,
        empId:assets[i].empId,
        empName: assets[i].empName,
        assetType: assets[i].assetType,
        model: assets[i].model,
        assetCode: assets[i].assetCode,
        shippingDate: assets[i].shippingDate,
        dateOfIssue: assets[i].dateOfIssue,
        dateOfReturn: assets[i].dateOfReturn,
        warrantyEndDate:assets[i].warrantyEndDate,
        lastMaintenanceDate:assets[i].lastMaintenanceDate,
        specs: JSON.stringify(assets[i].specs),
        isAvailable:assets[i].isAvailable,
        update:assets[i].update
      })
    }
    return updatedAssets;
  }


}
