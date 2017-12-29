import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import Config from '../config/default-config';

@Injectable()
export class passrecoveryService {
  sended: boolean;
  config: Config;

  constructor(private _http: Http) {
    this.config = new Config();
  }

  recovery(email) {
    this.sended = false;
    var headers = new Headers();
    var mail = 'email=' + email + '&X-API-KEY=' + this.config.endPoints('authkey');

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    return new Promise((resolve) => {
      this._http.post(this.config.endPoints('passRecovery'), mail, { headers: headers }).subscribe((data) => {
        if (data.json().success) {
          this.sended = true;
          resolve(this.sended)
        }else{
          resolve(data.json())
        }
      })
    })
  }

  isLogged():boolean{
    let token = window.localStorage.getItem('auth_key');

    if(token){
      return true;
    }
    return false;
  }
}