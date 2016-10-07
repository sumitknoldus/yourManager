import { Component, Input, OnInit, OnDestroy } from '@angular/core';
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
import {ClickableComponent} from "./clickable-update.component";


@Component({
  moduleId:module.id,
  selector: 'ym-admin',
  templateUrl: 'search-asset.component.html',
  styleUrls:['search-asset.component.css'],
})

export class SearchAssetComponent implements OnInit {
  @Input() public allocatedAssetsList: Asset[] = [];
  isResult = false;
  noResultIcon ='';
  noResultFound='';
  mode = 'Observable';
  public errorMessage = '';
  public selectedId: string;
  private gridOptions:GridOptions = <GridOptions>{};
  columnDefs = [];
  rowData = [];
  headers = [];


  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.forEach((data: { assets: Asset[]}) => {
      if(data.assets.length > 0){
        this.isResult = true;
        this.columnDefs = this.createColumnDefs(data.assets[0]);
        this.rowData = this.createDataRows(data.assets);
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
        headerName: key,
        field: key,
        width: 100
      })
    });

    headers.push({
      headerName: 'update',
      field: 'update',
      cellRendererFramework: {
        component: ClickableComponent
      },
      pinned: 'right',
      width: 120
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