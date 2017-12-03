import { Component } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { registerService } from '../../services/register.service';

@Component({
    templateUrl: 'dist/component/page-register/page-register.html',
    providers: [registerService],
    directives: [ROUTER_DIRECTIVES]
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
