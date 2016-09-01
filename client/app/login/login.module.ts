import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule }  from '@angular/http';
import { FormsModule }         from '@angular/forms';
import { LoginComponent }    from './login.component';
import { LoginService } from './login.service';
import { loginRouting }       from './login.route';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports:      [ SharedModule, loginRouting, HttpModule ],
    declarations: [ LoginComponent ],
    providers:    [ LoginService ]
})
export class LoginModule {}
