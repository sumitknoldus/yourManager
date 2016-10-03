import {Component} from '@angular/core';

import {Router, ActivatedRoute, Params} from "@angular/router";
import {AssetService} from "./asset.service";
import {OnInit} from "angular2/core";
import {GridOptions} from "ag-grid/main";
import {Asset} from "../shared/model/asset";

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: 'search-asset.component.html',
  styleUrls:['search-asset.component.css'],
})

export class UserComponent {

  private gridOptions:GridOptions =  <GridOptions>{};
  private columnDefs = [];
  private rowData = [];
  newUserMessage = "";

  constructor(private assetService: AssetService, private route: ActivatedRoute){}
  headers = [];

  ngOnInit() {
    this.route.data.forEach((data: { assets: Asset[]}) => {
      if(data.assets.length > 0) {
        this.columnDefs = this.createColumnDefs(data.assets[0]);
        this.rowData = this.createDataRows(data.assets)
      } else {
        swal(
          'No Data Found'
        )
      }
    });

    this.route.params.forEach((params: Params) => {
      this.newUserMessage = params['user'];
    });

    if(this.newUserMessage == 'new'){
      let name = JSON.parse(localStorage.getItem('user')).firstName;
      this.newUserMessage = "Welcome " + name + ". You have successfully signed up"
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

