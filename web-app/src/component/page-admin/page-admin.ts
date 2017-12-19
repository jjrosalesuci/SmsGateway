import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl: './page-admin.html',
})

export class AdminPageComponent {
    constructor(private _router:Router){}
    logout(){
        window.localStorage.removeItem('auth_key');
        this._router.navigate(['/login']);
    }
}
