import {Component} from '@angular2/core';
import {LoginService} from '.././login/login.service'

@Component({
    selector: 'login-form',
    providers: [LoginService],
    template: `
            <div class="container" >
                <div class="content">
                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                    <a (click)="logout()" href="#">Click Here to logout</a>
                </div>
            </div>
    	`
})

export class DashboardComponent {

    constructor(
        private _service:LoginService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}