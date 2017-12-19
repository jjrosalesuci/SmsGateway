import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { registerService } from '../../services/register.service';

@Component({
    templateUrl: './page-register.html',
    providers: [registerService],
})

export class RegisterPageComponent {
    model = { username: '', password: '', email: '', name: ''};

    constructor(
        private _registerService: registerService, private _router: Router
    ) { }

    register() {
        this._registerService.registerfn(this.model).then((res) => {
            if (res) {
                this._router.navigate(['Login']);
            } else {
                this._router.navigate(['Register']);
            }

        })
    }
}
