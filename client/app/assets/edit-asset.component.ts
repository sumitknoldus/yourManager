import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Asset} from "../shared/model/asset";
import {AssetService} from "./asset.service";

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

  asset = {};
  selectedHardwareType = '';


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.getData(id)
    });
  }

  getData(id:string){
    this.assetService.getById(id).subscribe(data =>
      this.asset = data,
      error => alert(error)
    )
  }
  submit(asset: Asset){
    this.assetService.editAsset(asset).subscribe(
      data => this.router.navigate(['admin/admin', asset.empId]),
      error => alert(error)
    )
  }


  getAvailableAssetList(asset: string){
    console.log("asset===========" +JSON.stringify(this.asset))

  }

}
