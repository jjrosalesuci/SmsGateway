import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import Config from '../config/default-config'

@Injectable()
export class loginService {
  isLoggedin: boolean;
  config: Config;

  constructor(private _http: Http) {
    this.config = new Config();
  }

  loginfn(usercreds) {
    this.isLoggedin = false;
    var headers = new Headers();
    var creds = 'username=' + usercreds.username + '&password=' + usercreds.password;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    return new Promise((resolve) => {
      this._http.post(this.config.endPoints('login'), creds, { headers: headers }).subscribe((data) => {
        if (data.json().success) {
          window.localStorage.setItem('auth_key', data.json().token);
          this.isLoggedin = true;
          resolve(this.isLoggedin)
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