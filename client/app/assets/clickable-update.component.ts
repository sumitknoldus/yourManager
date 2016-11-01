import {Component} from '@angular/core';

import {AgRendererComponent} from 'ag-grid-ng2/main';
import {Router} from "@angular/router";
import {AssetService} from "./asset.service";
import 'rxjs/add/observable/throw';


@Component({
  selector: 'clickable-cell',
  template: `
   <button (click)="editAsset()" class="btn btn-default btn-sm"> Edit </button>
   <button (click)="returnAsset()" [disabled]="isReturned" class="btn btn-danger btn-sm">Return</button>
    `,
  styles: ['.btn-danger {font-size: inherit; color: white;margin-top: -6%;}',
    '.btn-default {font-size: inherit; color: black;margin-top: -6%;}']

})
export class ClickableComponent {
  constructor(private router: Router, private assetService: AssetService){}
  private params:any;
    isReturned:boolean = false;
  agInit(params:any):void {
    this.params = params;
        if(this.params.data.dateOfReturn != null){
            this.isReturned= true;
        }
      else{
            this.isReturned = false;
        }

  }
  //isReturn = false;
  /**
   * This method redirects to the edit form
   */
  editAsset() {
    this.router.navigate(['/admin/asset/edit', this.params.data._id]);
  }

  /**
   * This method calls the service to return an asset
   */
  returnAsset() {
    this.assetService.returnAsset(this.params.data._id).subscribe(
      data =>{
       location.reload();

      },
      error => swal(
        'error',
        ''+JSON.stringify(error),
        'error'
      )
    )
  }

}

