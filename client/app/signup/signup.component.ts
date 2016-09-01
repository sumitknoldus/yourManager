import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../user/user";
import {SignupService} from "./signup.service";

@Component({
  moduleId: module.id,
  selector: 'ym-signup',
  templateUrl : 'signup.component.html',
  styleUrls : ['signup.component.css'],
  providers: [SignupService]
})

export class SignupComponent{
  @Input()
  user = {};

  constructor(private router: Router, private signupService: SignupService){}

  signup(selectedUser: User){
    console.log(JSON.stringify(selectedUser));
    this.signupService.signup(selectedUser)
      .then(data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['login']);
      }
    )
  }

  goBack(){
    this.router.navigate(['login'])
  }
}