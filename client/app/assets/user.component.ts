import {Component} from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';
import {AssetService} from './asset.service';
import {GridOptions} from 'ag-grid/main';
import { Observable } from 'rxjs/Rx';
import {DatePipe} from '@angular/common';

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
  adminMessage = "";
  id;
  headers = [];
  isResult = false;
  noResultIcon ='';
  noResultFound='';

  constructor(private assetService: AssetService, private route: ActivatedRoute, private datePipe: DatePipe){}

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
            this.adminMessage = "Contact Admin to get your records added.";
            this.noResultIcon = "../../assets/images/warning.png";
            this.noResultFound = "../../assets/images/no-result.png";
            this.isResult = false;
          }
        },
        error => alert(error)
      )
    } else{
      this.adminMessage = "Contact Admin to get your records added.";
      let name = JSON.parse(localStorage.getItem('user')).firstName;
      if(localStorage.getItem('message')){
        this.message = "Welcome " + name + ", you have successfully signed up.";
      }
      let timer = Observable.timer(3000);
      timer.subscribe(data => this.message = "");
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
      if(key == 'specs') {
        headers.push({
          headerName: 'SPECIFICATIONS',
          children: [
            {headerName : 'HD', field : 'specs.HD', width : 100},
            {headerName : 'RAM', field : 'specs.RAM', width : 100},
            {headerName : 'PROCESSOR', field : 'specs.Processor', width : 100}
          ]
        });
      } else {
        headers.push({
          headerName: this.getHeaderName(key).toLocaleUpperCase(),
          field: key,
          width: 140
        });
      };
    });

    return headers;
  }

  getHeaderName(key: string) {
    let newKey = key;
    let capsLetterArray  = key.match(/[A-Z]/);
    if(capsLetterArray !== null) {
      capsLetterArray.map(capitalLetter => key = key.replace(capitalLetter, ' '+capitalLetter.toLowerCase()));
      newKey = this.getHeaderName(key);
    }
    return newKey;
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
        shippingDate: this.datePipe.transform(assets[i].shippingDate, 'yyyy-MM-dd'),
        dateOfIssue: this.datePipe.transform(assets[i].dateOfIssue, 'yyyy-MM-dd'),
        dateOfReturn: this.datePipe.transform(assets[i].dateOfReturn, 'yyyy-MM-dd'),
        warrantyEndDate: this.datePipe.transform(assets[i].warrantyEndDate, 'yyyy-MM-dd'),
        lastMaintenanceDate: this.datePipe.transform(assets[i].lastMaintenanceDate, 'yyyy-MM-dd'),
        specs: JSON.stringify(assets[i].specs),
        isAvailable:assets[i].isAvailable,
        update:assets[i].update
      });
    }
    return updatedAssets;
  }


}

