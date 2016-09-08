import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'ym-hardare',
  templateUrl: 'add-hardware.component.html',
  styleUrls: ['add-hardware.component.css']
})

export class AddHardwareComponent{
  hardwareTypes = [ "mouse", "keyboard", "laptop", "monitor"]

  selectedHardwareType = '';
  @Input() selectedHardwareType;

  onSelect(){
    console.log(this.selectedHardwareType)
  }

}
