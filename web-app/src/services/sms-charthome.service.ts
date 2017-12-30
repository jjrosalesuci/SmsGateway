import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import Config from '../config/default-config';

@Injectable()
export class SmsCharthomeService {
    config: Config;

    constructor(private _http: HttpClient){
        this.config = new Config();
    }

    getSmsdata(){
        let userkey = window.localStorage.getItem('auth_key');
        let url = this.config.endPoints('smschartdata') + '?X-API-KEY=' + userkey;
        return this._http.get(url).map(result => result);
    }
}