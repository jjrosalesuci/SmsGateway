// Libraries
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { loginService } from '../../services/login.service';

@Component({
    templateUrl: './page-login.html',
    providers: [loginService],
    styleUrls: ['./page-login.scss']
})
export class LoginPageComponent {

    form: FormGroup;

    localUser = { username: '', password: ''};

    constructor(
        private _loginService: loginService,
        private _router: Router,
        private formBuilder: FormBuilder

    ) {
        this.createForm();
    }

    createForm() {
        this.form = this.formBuilder.group({
            username: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15)
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(7),
                Validators.maxLength(32)
            ]]
        });
    }

    login() {
        this.localUser.username = this.form.get('username').value;
        this.localUser.password = this.form.get('password').value;

        this._loginService.loginfn(this.localUser).then((res) => {
            if (res == true) {
                this._router.navigate(['/admin']);
            }else {
                //this._router.navigate(['Login']);
            }
        })
    }
}

