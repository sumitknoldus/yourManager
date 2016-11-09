import { NgModule }      from '@angular/core';

import { HttpModule }  from '@angular/http';

import { LoginComponent }    from './login.component';
import { LoginService } from './login.service';
import { loginRouting }       from './login.route';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    imports:      [ SharedModule, loginRouting, HttpModule ],
    declarations: [ LoginComponent ],
    providers:    [ LoginService ]
})
export class LoginModule {}
