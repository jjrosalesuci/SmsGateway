import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class registerService {
    wasRegistered: boolean;

    constructor(private _http: Http) {

    }

    registerfn(model) {
        this.wasRegistered = false;
        var headers = new Headers();
        var user_model = 'user=' + model.username + '&password=' + model.password + '&email=' + model.email + '&name=' + model.name;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        return new Promise((resolve) => {
            this._http.post('http://localhost/SmsGateway/index.php/users', user_model, { headers: headers }).subscribe((data) => {
                if (data.json().success) {
                    this.wasRegistered = true;
                    resolve(this.wasRegistered)
                }
            })
        })
    }
}