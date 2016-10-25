import { Injectable }             from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs/Observable';
import {AssetService} from "./asset.service";
import {Asset} from "../shared/model/asset";

@Injectable()
export class AssignAssetResolve implements Resolve<Asset[]> {

  constructor(private assetService: AssetService, private router: Router) {}

  /**
   * This method calls the service to get assets by ID.
   * @param route
   * @returns {any}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<> | Promise<any> | any {
    return this.assetService.getAllEmp().map( empData => {
        if (empData) {
          return empData
        } else {
          return false
        }
      }
    )
  }
}