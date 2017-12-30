import { Component, OnInit } from '@angular/core';
import { GetCreditService } from '../../../../services/get-credit.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
    selector: 'project-info',
    templateUrl: './project-info.html',
    providers: [
        GetCreditService
    ]
})
export class ProjectInfoComponent implements OnInit {
    auth_token: any;
    promise: any;
    credit: any;

    constructor(
        private router: Router,
        private getCred: GetCreditService
    ) {
        this.auth_token = window.localStorage.getItem('auth_key');
        getCred.getCredit(window.localStorage.getItem('auth_key')).then(
            (res) => {
                this.credit = res;
                if (this.credit == 'El usuario no existe') {
                    window.localStorage.removeItem('auth_key');
                    this.router.navigate['/']
                }
            }
        );
        if (this.credit == 'El usuario no existe') {
            window.localStorage.removeItem('auth_key');
            this.router.navigate['/']
        }
    }

    ngOnInit() { }
}