// Libraries
import {Component} from 'angular2/core';

import {loginService} from '../../services/login.service';  

@Component({
    templateUrl  : 'dist/component/page-login/page-login.html',
    providers: [loginService] 
})
export class LoginPageComponent { 
    isLoged: boolean = false; 
    constructor(private _loginService: loginService) { }  

    ngOnInit(): void { 
        this.isLoged = this._loginService.login('pepe','pepe'); 
     } 
}