import { Injectable }             from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs/Observable';
import {AssetService} from "./asset.service";
import {Asset} from "../shared/model/asset";

@Injectable()
export class ListNewAssetResolve implements Resolve<Asset[]> {

  constructor(private assetService: AssetService, private router: Router) {}

  /**
   * This method calls the service to get all assets.
   * @param route
   * @returns {any}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<> | Promise<any> | any {
    return this.assetService.listNewAssets().map( assets => {
        if (assets) {
          return assets
        } else {
          return false
        }
      }
    )
  }
}