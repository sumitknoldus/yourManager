import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AssetService} from './asset.service';
import 'rxjs/add/observable/throw';


@Component({
  selector: 'clickable-assign-cell',
  template: `
   <button (click)='assignAsset()' class='btn btn-default btn-sm'>Assign Asset</button>
    `,
  styles: ['.btn {font-size: inherit; background-color: #26A69A; color: white;margin-top: -6%;}']
})
export class ClickableAssignComponent {
  private params:any;
  constructor(private router: Router, private assetService: AssetService) {}
  agInit(params:any):void {
    this.params = params;
  }
  /**
   * This method redirects to the assign asset form
   */
  assignAsset() {
    this.router.navigate(['/admin/asset/assign', this.params.data._id]);
  }


}

