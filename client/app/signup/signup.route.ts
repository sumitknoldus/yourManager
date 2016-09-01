import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';

export const signupRoutes: Routes = [{
    path: '',
    component: SignupComponent
  }
];

export const signupRouting = RouterModule.forChild(signupRoutes);
