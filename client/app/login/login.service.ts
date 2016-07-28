import {Injectable} from '@angular/core';
import {User} from '.././user/user';

var users = [
    {
        email:'sumit@knoldus.com',
        password:'11'
    }
];

@Injectable()
export class LoginService {

        login(user){

        var authenticatedUser = users.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password){
            localStorage.setItem("user", authenticatedUser);
            //this._router.navigate(['Home']);
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
//var users = [
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
//        var authenticatedUser = users.find(u => u.email === user.email);
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