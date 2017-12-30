import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import Config from '../config/default-config';

@Injectable()
export class GetCreditService {
    credit: any;
    config: Config;

    constructor(private _http: Http) {
        this.config = new Config();
    }

    getCredit(key) {
        var headers = new Headers();
        var user_authkey = 'user_key=' + key + '&X-API-KEY=' + this.config.endPoints('authkey');

        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        return new Promise((resolve) => {
            this._http.post(this.config.endPoints('getCredit'), user_authkey, { headers: headers }).subscribe(
                (data) => {
                    if (data.json().success) {
                        this.credit = data.json().credit;
                        resolve(this.credit)
                    }
                },
                (err) => {
                    this.credit = err.json().error;
                    resolve(this.credit)
                }
            )
        })
    }

}