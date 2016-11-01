import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import {LoginGuard} from "../login.guard";

export const signupRoutes: Routes = [
    /*{path: 'signup',
    component: SignupComponent,
    canActivate: [LoginGuard]
  }*/
];

export const signupRouting = RouterModule.forChild(signupRoutes);
