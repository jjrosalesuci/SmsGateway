import { Component } from 'angular2/core';
import { Router,ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    templateUrl: 'dist/component/page-admin/page-admin.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AdminPageComponent {
    constructor(private _router:Router){}
    logout(){
        window.localStorage.removeItem('auth_key');
        this._router.navigate(['Login']);
    }
}
