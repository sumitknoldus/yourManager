import { OnInit,Injectable } from '@angular/core';

import {User} from '.././user/user';

var USERS =  [
    {
        email:'sumit@knoldus.com',
        password:'11'
    },
    {
        email:'amit@knoldus.com',
        password:'11'
    }
];

@Injectable()
export class LoginService implements OnInit {

    login(user:User) {

        var authenticatedUser = USERS.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem('user', JSON.stringify(authenticatedUser));
            return true;
        }
        return false;

    }
}

//import {Injectable} from '@angular/core';
//import {Router} from '@angular/router';
//import {User} from '.././user/user'
//
//
//var USERS = [
//    new User('admin@admin.com','adm9'),
//    new User('user1@gmail.com','a23')
//];
//
//@Injectable()
//export class LoginService {
//
//    constructor(
//        private _router: Router){}
//
//    logout() {
//        localStorage.removeItem("user");
//        this._router.navigate(['Login']);
//    }
//
//    login(user){
//        var authenticatedUser = USERS.find(u => u.email === user.email);
//        if (authenticatedUser && authenticatedUser.password === user.password){
//            localStorage.setItem("user", authenticatedUser);
//            this._router.navigate(['Home']);
//            return true;
//        }
//        return false;
//
//    }
//
//    checkCredentials(){
//        if (localStorage.getItem("user") === null){
//            this._router.navigate(['Login']);
//        }
//    }
//}