import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../shared/model/user';

@Component({
  moduleId:module.id,
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})

export class AdminComponent{
  show: boolean = true;
  showSidebar: boolean = true;
  search = {value:''};
  @Input
  user = new User();
  constructor(private router: Router) {};

  ngOnInit() {

    if (localStorage.getItem('user') === null) {
      this.showSidebar = false;
      this.show = false;
    } else {
      this.show= true;
      if(JSON.parse(localStorage.getItem('user')).role === 'user') {
        this.showSidebar = false;
      }
      this.user= JSON.parse(localStorage.getItem('user'));
    }
  }

}
