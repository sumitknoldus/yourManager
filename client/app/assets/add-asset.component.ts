import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from '../shared/model/asset';
import {AssetService} from './asset.service';
import 'rxjs/add/observable/throw';


@Component({
  moduleId:module.id,
  selector: 'ym-add-asset',
  templateUrl: 'add-asset.component.html',
  styleUrls: ['add-asset.component.css'],
})

export class AddAssetComponent {
  hardwareTypes = [ 'Mouse', 'Keyboard', 'Laptop', 'Monitor', 'Adapter', 'Laptop Stand', 'Bag'];
  isAssign: boolean = false;
    @Input()
    asset = new Asset();
    availableAssets = {
        availableStock: '',
        assetList:[{
            assetCode: '',
            _id:''
        }]
    };
  constructor(private assetService: AssetService, private router: Router) { }

  /**
   * This method calls the service method to add a new asset
   * @param asset
   */
  submit(asset: Asset) {
    asset.assetCode = asset.assetCode.replace(/[\s]/g, '');
    asset.isAvailable = true;
    this.assetService.addAsset(asset).subscribe(
      res => {
          this.router.navigate(['admin/asset/list-new']);
          swal({   title: 'Asset successfully added.',   text: 'I will close in 1 second.',   timer: 1000,   showConfirmButton: false });
      },

      error =>  swal(
        'Error',
        ''+JSON.stringify(error),
        'error'
      ));
  }


}
