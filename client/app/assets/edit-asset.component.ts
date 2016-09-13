import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Asset} from "../shared/model/asset";
import {AdminService} from "./asset.service";

@Component({
  moduleId:module.id,
  selector: 'ym-edit-hardware',
  templateUrl: 'add-asset.component.html',
  styleUrls: ['add-asset.component.css']
})

export class EditAssetComponent{

  constructor(private assetService: AdminService, private router: Router, private route: ActivatedRoute){}

  hardwareTypes = [ "Mouse", "Keyboard", "Laptop", "Monitor", "Adapter", "Laptop Stand", "Bag"]

  @Input() asset;
  selectedHardwareType = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.assetService.editAsset(id).subscribe(data => this.asset = data)
    });
  }

  addHardware(asset: Asset){
    this.assetService.addAsset(asset).subscribe(
      res => this.router.navigate(['/dashboard']),
      error =>  alert(error))
  }

  editAsset(){

  }

}
