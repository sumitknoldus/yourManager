import { Component,Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'my-app',
    template: `
     <router-outlet></router-outlet>
    `,
    styles : [`
    body {
     background-color: #dff0d8;
    }
  `]
})

@Injectable()
export class AppComponent {
}
