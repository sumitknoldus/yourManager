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


@Component({
    moduleId:module.id,
    selector: 'ym-list',
    templateUrl: 'search-asset.component.html',
    styleUrls:['search-asset.component.css'],
})

export class ListComponent implements OnInit {
    @Input() public allocatedAssetsList: Asset[] = [];
    mode = 'Observable';
    public errorMessage = '';
    public selectedId: string;
    constructor(private assetService: AssetService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.assetService.listAllAsset().subscribe(
            data =>{

                this.allocatedAssetsList = data;

            },
            error => alert(error)
        )
        //this.route.data.forEach((data: { assets: Asset[]}) => {
        //    this.allocatedAssetsList = data.assets
        //});
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

    //listAllAsset() {
    //    this.assetService.listAllAsset().subscribe(
    //        data =>{
    //
    //            this.allocatedAssetsList = data.assets;
    //        },
    //        error => alert(error)
    //    )
    //}


    editAsset(id){
        this.router.navigate(['asset/edit', id])
    }

    getAvailableAssetList(asset: string){
        console.log("called with asset :::::::::" + asset)
    }
}
