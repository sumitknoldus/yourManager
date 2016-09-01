import { NgModule }      from '@angular/core';
import { HttpModule }  from '@angular/http';
import {SharedModule} from "../shared/shared.module";
import {SignupComponent} from "./signup.component";
import {SignupService} from "./signup.service";
import {signupRouting} from "./signup.route";

@NgModule({
  imports:      [ SharedModule,  HttpModule, signupRouting ],
  declarations: [ SignupComponent ],
  providers:    [ SignupService ]
})
export class SignupModule {}
