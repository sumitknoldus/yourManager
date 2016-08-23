import { Component,Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'my-app',
    template: `
     <router-outlet></router-outlet>
    `
})

@Injectable()
export class AppComponent {
}
