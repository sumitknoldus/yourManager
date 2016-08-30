import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { LoginComponent }    from './login.component';
import { LoginService } from './login.service';
import { loginRouting }       from './login.route';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports:      [ SharedModule, loginRouting ],
    declarations: [ LoginComponent ],
    providers:    [ LoginService ]
})
export class LoginModule {}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */