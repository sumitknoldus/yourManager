import { NgModule }      from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {homeRouting} from './home.route';
import {HomeComponent} from './home.component';

@NgModule({
  imports:      [ SharedModule, homeRouting ],
  declarations: [ HomeComponent],
})
export class HomeModule {}
