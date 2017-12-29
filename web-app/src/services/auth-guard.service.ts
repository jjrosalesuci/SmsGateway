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
        this.isLoggedIn = this.loginServ.isLoggedin;
        if(this.loginServ.isLogged()){
            return true;    
        }
        this._router.navigate(['/not-permission']);
        return false;
    }
}