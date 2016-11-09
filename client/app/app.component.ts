import { Component,Injectable } from '@angular/core';

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
