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
  hardwareTypes = [ "Mouse", "Keyboard", "Laptop", "Monitor", "Adapter", "Laptop Stand", "Bag"]

  @Input() asset = new Asset();
  selectedHardwareType = '';


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.asset = this.assetService.getById(id).subscribe(data => this.asset = data, error => alert(error))
    });
  }

  submit(asset: Asset){
    console.log(":::"+ asset.empId);
    this.assetService.editAsset(asset).subscribe(
      data => this.router.navigate(['admin', asset.empId]),
      error => alert(error)
    )
  }


}
