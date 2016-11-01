import { Component, Input,Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import {AssetService} from './asset.service';
import {Asset} from '../shared/model/asset';
import {Specs} from '../shared/model/specs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';
import {error} from "util";
import {GridOptions} from "ag-grid/main";
import {AgRendererComponent} from "ag-grid-ng2/main";
import {ClickableComponent} from "./clickable-update.component";
import {AssetModule} from "../app.module";
import { DatePipe } from '@angular/common';


@Component({
  moduleId:module.id,
  selector: 'ym-list',
  templateUrl: 'search-asset.component.html',
  styleUrls:['search-asset.component.css'],
})

export class ListComponent implements OnInit{
  @Input()
  public allocatedAssetsList: Asset[] = [];
  cell:any;
  isResult = false;
    noResultIcon ='';
    noResultFound='';
  mode = 'Observable';
  public errorMessage = '';
  public selectedId: string;

  private gridOptions:GridOptions =  <GridOptions>{};

  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.route.data.forEach((data: { assets: Asset[]}) => {
      if(data.assets.length > 0) {
        this.gridOptions.columnDefs = this.createColumnDefs(data.assets[0]);
        this.gridOptions.rowData = this.createDataRows(data.assets);
        this.isResult= true;
      } else {
          this.noResultIcon = "../../assets/images/warning.png";
          this.noResultFound = "../../assets/images/no-result.png";
        this.isResult = false;
      }
    });
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
        headerName: this.getHeaderName(key).toLocaleUpperCase(),
        field: key,
        width: 140
      })
    });

    headers.push({
      headerName: 'UPDATE',
      field: 'update',
      cellRendererFramework: {
        //template: '<button (onClicked) = "editAsset()"> Edit </button>'
        component: ClickableComponent
      },
      pinned: 'right',
      width: 140
    });
    return headers;
  }

  getHeaderName(key: string) {
    let newKey = key;
    let capsLetterArray  = key.match(/[A-Z]/);
    if(capsLetterArray != null){
      capsLetterArray.map(capitalLetter => key = key.replace(capitalLetter, ' '+capitalLetter.toLowerCase()));
      newKey = this.getHeaderName(key)
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
        serialNumber: assets[i].serialNumber,
        shippingDate: this.datePipe.transform(assets[i].shippingDate, 'yyyy-MM-dd'),
        dateOfIssue: this.datePipe.transform(assets[i].dateOfIssue, 'yyyy-MM-dd'),
        dateOfReturn: this.datePipe.transform(assets[i].dateOfReturn, 'yyyy-MM-dd'),
        warrantyEndDate: this.datePipe.transform(assets[i].warrantyEndDate, 'yyyy-MM-dd'),
        lastMaintenanceDate: this.datePipe.transform(assets[i].lastMaintenanceDate, 'yyyy-MM-dd'),
        specs: JSON.stringify(assets[i].specs),
        isAvailable:assets[i].isAvailable,
        update:assets[i].update
      })
    }
    return updatedAssets;
  }
}
