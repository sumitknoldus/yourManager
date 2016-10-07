import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Asset} from "../shared/model/asset";
import {AssetService} from "./asset.service";
import 'rxjs/add/observable/throw';
import {DateTime} from "ng2-datetime-picker";

@Component({
  moduleId:module.id,
  selector: 'ym-edit-hardware',
  templateUrl: 'add-asset.component.html',
  styleUrls: ['add-asset.component.css']
})

export class EditAssetComponent{

  constructor(private assetService: AssetService, private router: Router, private route: ActivatedRoute){}
  isAssign: boolean = false;
  hardwareTypes = [ "Mouse", "Keyboard", "Laptop", "Monitor", "Adapter", "Laptop Stand", "Bag"];
  isEdit= true;
  asset = new Asset();
  selectedHardwareType = '';


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.getData(id)
    });
  }

  /**
   * This method calls the service get asset by object ID
   * @param id
   */
  getData(id:string){
    this.assetService.getById(id).subscribe(data =>{
        this.asset = data;
        DateTime.formatDate = (date: Date) => moment(date).format('DD-MM-YYYY');
        this.asset.shippingDate = DateTime.formatDate(data.shippingDate, true);
        this.asset.dateOfIssue = DateTime.formatDate(data.dateOfIssue, true);
        this.asset.dateOfReturn = DateTime.formatDate(data.dateOfReturn, true);
        this.asset.lastMaintenanceDate = DateTime.formatDate(data.lastMaintenanceDate, true)
      },
      error => swal(
        'error',
        ''+JSON.stringify(error),
        'error'
      )
    )
  }

  /**
   * This method calls the service method to edit a new asset
   * @param asset
   */
  submit(asset: Asset){
    this.assetService.editAsset(asset).subscribe(
      data => this.router.navigate(['admin/asset/list']),
      error => swal(
        'error',
        ''+JSON.stringify(error),
        'error'
      )
    )
  }

}
