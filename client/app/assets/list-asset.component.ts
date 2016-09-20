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


@Component({
    moduleId:module.id,
    selector: 'ym-list',
    templateUrl: 'search-asset.component.html',
    styleUrls:['search-asset.component.css'],
})

export class ListComponent implements OnInit, AgRendererComponent{
    @Input()
    public allocatedAssetsList: Asset[] = [];
    cell:any;

    mode = 'Observable';
    public errorMessage = '';
    public selectedId: string;

    private gridOptions:GridOptions =  <GridOptions>{};
 // @Output() onClicked = new EventEmitter<boolean>();

    constructor(private assetService: AssetService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.forEach((data: { assets: Asset[]}) => {
            console.log("<button type=\"button\">Click Me!<\/button>");
            //for(let i=0;i<data.assets.length;i++){
            //}
            this.gridOptions.columnDefs = this.createColumnDefs(data.assets[0]);
            console.log(">>>>>>>>>"+JSON.stringify(data.assets[0]));
            this.gridOptions.rowData = this.createDataRows(data.assets)
        });
    }

    onCellDoubleClicked(event){
   // console.log(event.data);
}


    returnAsset(objId: string) {
        this.assetService.returnAsset(objId).subscribe(
            data =>{
                alert("Asset Returned");
                console.log(data)
            },
            error => alert(error)
        )
    }

    getAvailableAssetList(asset: string){
        console.log("called with asset :::::::::" + asset)
    }




    private createColumnDefs(asset) {
        let keyNames = Object.keys(asset);
        let headers = []
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
                template: '<button (click)="editAsset()" class="btn btn-default">Edit</button>',
            },
            width: 100
        });
        return headers;
    }

  editAsset(): void {
    alert("here");
  }

    private createDataRows(assets) {
        let updatedAssets = [];
        let specs = [];
        //assets.map(data => specs.push(assets.specs.HD + "," +assets.specs.RAM + "," + assets.specs.Processor));
        //specs.map(spec => console.log(spec.HD))
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
