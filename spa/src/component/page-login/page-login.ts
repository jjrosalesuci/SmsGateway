// Libraries
import { Component } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { FormBuilder, FormGroup, Validators } from 'angular2/forms';

import { loginService } from '../../services/login.service';

@Component({
    templateUrl: 'dist/component/page-login/page-login.html',
    providers: [loginService],
    directives: [ROUTER_DIRECTIVES]
})
export class LoginPageComponent {

    localUser = { username: '', password: '' };

    form: FormGroup;

    createForm() {
        this.form = this.formBuilder.group({
            username: ['',Validators.required],
            password: ''
        })
    }

    constructor(
        private _loginService: loginService, 
        private _router: Router,
        private formBuilder: FormBuilder

    ) { }

    login() {
        this._loginService.loginfn(this.localUser).then((res) => {
            if (res == true) {
                this._router.navigate(['Admin']);
            }else {
                //this._router.navigate(['Login']);
            }
        })
    }
}

