import { Injectable }             from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs/Observable';
import {AssetService} from "./asset.service";
import {Asset} from "../shared/model/asset";

@Injectable()
export class SearchAssetResolve implements Resolve<Asset[]> {

  constructor(private assetService: AssetService, private router: Router) {}

  /**
   * This method calls the service to get assets by ID.
   * @param route
   * @returns {any}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<> | Promise<any> | any {
    let id = route.params['id'];
    return this.assetService.getAllocatedAssets(id).map( assets => {
      if (assets) {
        return assets
      } else {
        return false
      }
    }
  )
  }
}