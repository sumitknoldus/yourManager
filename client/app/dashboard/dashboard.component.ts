import {Component} from '@angular/core';
import {LoginService} from '.././login/login.service'

@Component({
    selector: 'dashboard',
    providers: [],
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

    //constructor(
    //    private _service:LoginService){}
    //
    //ngOnInit(){
    //    this._service.checkCredentials();
    //}
    //
    //logout() {
    //    this._service.logout();
    //}
}