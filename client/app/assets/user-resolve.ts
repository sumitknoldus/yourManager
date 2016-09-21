import { Injectable }             from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs/Observable';
import {AssetService} from "./asset.service";
import {Asset} from "../shared/model/asset";

@Injectable()
export class UserResolve implements Resolve<Asset[]> {

  constructor(private assetService: AssetService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<> | Promise<any> | any {
    console.log("---------")
    let id = JSON.parse(localStorage.getItem("user")).empId;
    console.log("========" + id)
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