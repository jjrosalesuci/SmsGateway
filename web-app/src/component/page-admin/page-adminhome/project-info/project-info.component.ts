import { Component, OnInit } from '@angular/core';
import { GetCreditService } from '../../../../services/get-credit.service';

@Component({
    selector: 'project-info',
    templateUrl: './project-info.html',
    providers: [
        GetCreditService
    ]
})
export class ProjectInfoComponent implements OnInit {
    auth_token:any ;
    promise:any;
    credit:any;

    constructor(
        private getCred: GetCreditService         
    ) {
        this.auth_token = window.localStorage.getItem('auth_key');
        getCred.getCredit(window.localStorage.getItem('auth_key')).then((res) => this.credit = res);
    }

    ngOnInit() { }
}