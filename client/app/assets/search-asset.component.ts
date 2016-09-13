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


@Component({
    moduleId:module.id,
    selector: 'ym-admin',
    templateUrl: 'search-asset.component.html',
    styleUrls:['search-asset.component.css'],
})

export class AdminComponent implements OnInit, OnDestroy {
   @Input() public allocatedAssetsList: Asset[] = [];
    private sub: any;
    mode = 'Observable';
    public errorMessage = '';
    public selectedId: string;
    constructor(private assetService: AssetService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
      this.route.data.forEach((data: { assets: Asset[]}) => {
        this.allocatedAssetsList = data.assets
      });
    }

  returnAsset(objId: string) {
    this.assetService.returnAsset(objId)
  }

  editAsset(id){
      this.router.navigate(['hardware/edit', id])
    }

}
