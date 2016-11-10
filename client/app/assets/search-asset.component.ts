import { Component, Input, OnInit } from '@angular/core';
import {AssetService} from './asset.service';
import {Asset} from '../shared/model/asset';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';
import {GridOptions} from 'ag-grid/main';
import {ClickableComponent} from './clickable-update.component';
import {DatePipe} from '@angular/common';


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
  columnDefs = [];
  rowData = [];
  headers = [];
  public errorMessage = '';
  public selectedId: string;
  private gridOptions:GridOptions = <GridOptions>{};
  constructor(private assetService: AssetService,
              private router: Router,
              private route: ActivatedRoute,
              private datePipe: DatePipe) {}

  ngOnInit() {

    this.gridOptions.context = {
      assetService: this.assetService,
      gridOptions: this.gridOptions,
      datePipe: this.datePipe,
      createDataRows: this.createDataRows,
      router: this.router
    };

    this.route.data.forEach((data: { assets: Asset[]}) => {
      if(data.assets.length > 0) {
        this.isResult = true;
        this.columnDefs = this.createColumnDefs(data.assets[0]);
        this.rowData = this.createDataRows(data.assets);
      } else {
        this.noResultIcon = '../../assets/images/warning.png';
        this.noResultFound = '../../assets/images/no-result.png';
        this.isResult = false;
      }
    });

  }

  /**
   * This method returns column headers for ag-Grid
   * @param asset
   * @returns {Array}
   */


  getHeaderName(key: string) {
    let newKey = key;
    let capsLetterArray  = key.match(/[A-Z]/);
    if(capsLetterArray !== null) {
      capsLetterArray.map(capitalLetter => key = key.replace(capitalLetter, ' '+capitalLetter.toLowerCase()));
      newKey = this.getHeaderName(key);
    }
    return newKey;
  }

  private createColumnDefs(asset) {
    let keyNames = Object.keys(asset);
    let headers = [];

    keyNames.filter(key => key !== '__v' && key !== '_id').map(key => {

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

    headers.push({
      headerName: 'UPDATE',
      field: 'update',
      cellRenderer: this.editAsset,
      pinned: 'right',
      width: 140
    });

    return headers;
  }

  editAsset(params) {
    var eDiv = document.createElement('div');
    eDiv.innerHTML = '<button style="font-size: inherit; margin-top: -6%;" class="btn btn-sm btn-default btn-simple">Edit' +
      '</button><button style = "margin-left: 3%; font-size: inherit; color: white;margin-top: -6%;" class="btn btn-sm btn-danger return">Return</button>';
    var eButton = eDiv.querySelectorAll('.btn-simple')[0];
    var rButton = eDiv.querySelectorAll('.return')[0];

    if (params.data.dateOfReturn !== null) {
      rButton.setAttribute('disabled', 'true');
    }

    eButton.addEventListener('click', function () {
      params.context.router.navigate(['/admin/asset/edit', params.data._id]);
    });

    rButton.addEventListener('click', function () {
      rButton.removeAttribute('disabled');
      params.context.assetService.returnAsset(params.data._id).subscribe(data => {
          params.context.assetService.listAllAsset().subscribe(rows => {
              let dataRows = params.context.createDataRows(rows);
              params.context.gridOptions.api.setRowData(dataRows)
              swal({
                title: 'Asset Returned Successfully.',
                text: 'Auto close in 1 second.',
                timer: 1000,
                showConfirmButton: false
              }).done();
            },
            error => {
              swal(
                'error',
                '' + JSON.stringify(error),
                'error'
              );
            });
        },
        error => {
          swal(
            'error',
            '' + JSON.stringify(error),
            'error'
          );
        });
    });
    return eDiv;
  }


  /**
   * This method returns rows for the ag-Grid
   * @param assets
   * @returns {Array}
   */
  private createDataRows(assets) {
    let updatedAssets = [];
    for(let i in assets) {
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
        specs: assets[i].specs,
        isAvailable:assets[i].isAvailable,
        update:assets[i].update
      });
    }
    return updatedAssets;
  }
}
