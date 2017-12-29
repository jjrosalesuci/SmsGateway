import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './page-admin.html',
    styleUrls: ['./page-admin.scss']
})

export class AdminPageComponent {
    public show: boolean = false;

    constructor(private _router: Router) { }

    logout() {
        window.localStorage.removeItem('auth_key');
        window.location.replace('/login');
    }

    toggleCollapse() {
        this.show = !this.show
    }
}
