// Libraries
import {Component}         from '@angular/core';
import { loginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';

@Component({
    selector    : 'navigation',
    templateUrl : './navigation.html',
    styleUrls: ['./navigation.scss']
})
export class NavigationComponent { 
    public isCollapsed: boolean = true;

    constructor(
        private login_serv:loginService,
        private _router: Router
    ){
        
    }
    
    islogged:boolean = this.login_serv.isLogged();

    hideElement():boolean{
        if(this._router.url.includes("/admin")){
            return false;
        }else{
            return true;
        }
    }
}