import {Component} from "@angular/core";
import {AssetService} from "./asset.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Asset} from "../shared/model/asset";
import {GridOptions} from "ag-grid/main";
import {ClickableComponent} from "./clickable-update.component";

@Component({
  moduleId:module.id,
  selector: 'ym-list',
  templateUrl: 'search-asset.component.html',
  styleUrls:['search-asset.component.css'],
})

export class ListNewAssetComponent {

  private gridOptions:GridOptions =  <GridOptions>{};

  isResult;
  noResultFound;

  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.forEach((data: { assets: Asset[]}) => {
      if(data.assets.length > 0) {
        this.gridOptions.columnDefs = this.createColumnDefs(data.assets[0]);
        this.gridOptions.rowData = this.createDataRows(data.assets);
        this.isResult= true;
      } else {
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
    keyNames.filter(key => key != '__v' && key != '_id' && key != 'empId' &&
    key != 'empName' && key != 'dateOfIssue' && key != 'dateOfReturn').map(key => {
      headers.push({
        headerName: key,
        field: key,
        width: 140
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
        serialNumber: assets[i].serialNumber,
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