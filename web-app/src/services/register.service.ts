import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import Config from '../config/default-config';

@Injectable()
export class registerService {
    wasRegistered: boolean;
    config: Config;

    constructor(private _http: Http) {
        this.config = new Config();
    }

    registerfn(model) {
        this.wasRegistered = false;
        var headers = new Headers();
        var user_model = 'user=' + model.username + '&password=' + model.password + '&email=' + model.email + '&name=' + model.name;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        return new Promise((resolve) => {
            this._http.post(this.config.endPoints('register'), user_model, { headers: headers }).subscribe((data) => {
                if (data.json().success) {
                    this.wasRegistered = true;
                    resolve(this.wasRegistered)
                }
            })
        })
    }
}