import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { registerService } from '../../services/register.service';

@Component({
    templateUrl: './page-register.html',
    providers: [registerService],
    styleUrls: ['./page-register.scss']
})

export class RegisterPageComponent {
    model = { username: '', password: '', email: '', name: '' };

    constructor(
        private _registerService: registerService,
        private _router: Router,
        private formBuilder: FormBuilder
    ) {
        this.createForm();
    }

    form: FormGroup;

    createForm() {
        this.form = this.formBuilder.group({
            username: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15)
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(32)
            ]],
            email: ['', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(32),
                Validators.email
            ]],
            name: ['', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(32)
            ]]
        });
    }

    register() {
        this.model.username = this.form.get('username').value;
        this.model.password = this.form.get('password').value;
        this.model.email = this.form.get('email').value;
        this.model.name = this.form.get('name').value;

        this._registerService.registerfn(this.model).then((res) => {
            if (res) {
                this._router.navigate(['/login']);
            } else {
                console.log(res);
                this.form.reset;
                this._router.navigate(['/register']);
            }
        })
    }
}
