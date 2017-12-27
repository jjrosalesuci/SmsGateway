import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { loginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    isLoggedIn = false;

    constructor(
        private _router: Router,
        private loginServ: loginService
    ) {

    }

    canActivate() {
        console.log('AuthGuard#canActivate called');
        this.isLoggedIn = this.loginServ.isLoggedin;
        console.log(this.loginServ.isLogged());
        if(this.loginServ.isLogged()){
            return true;    
        }
        this._router.navigate(['/not-permission']);
        return false;
    }
}