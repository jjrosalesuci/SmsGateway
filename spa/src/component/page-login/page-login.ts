// Libraries
import { Component } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { loginService } from '../../services/login.service';

@Component({
    templateUrl: 'dist/component/page-login/page-login.html',
    providers: [loginService],
    directives: [ROUTER_DIRECTIVES]
})
export class LoginPageComponent {

    localUser = { username: '', password: '' };

    constructor(
        private _loginService: loginService, private _router: Router
    ) { }

    login() {
        this._loginService.loginfn(this.localUser).then((res) => {
            if (res) {
                this._router.navigate(['Admin']);
            } else {
                this._router.navigate(['Login']);
            }
        })
    }
}

