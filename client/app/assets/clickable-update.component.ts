import {Component} from '@angular/core';

import {AgRendererComponent} from 'ag-grid-ng2/main';
import {Router} from "@angular/router";
import {AssetService} from "./asset.service";

@Component({
  selector: 'clickable-cell',
  template: `
   <button (click)="editAsset()" class="btn btn-default btn-sm"> Edit </button>
   <button (click)="returnAsset()" class="btn btn-danger btn-sm">Return</button>
    `
})
export class ClickableComponent implements AgRendererComponent {
  constructor(private router: Router, private assetService: AssetService){}
  private params:any;

  agInit(params:any):void {
    this.params = params;
  }

  editAsset() {
    this.router.navigate(['/admin/asset/edit', this.params.data._id]);
  }

  returnAsset() {
    this.assetService.returnAsset(this.params.data._id).subscribe(
      data =>{
        location.reload();
        console.log(data)
      },
      error => alert(error)
    )
  }

}

