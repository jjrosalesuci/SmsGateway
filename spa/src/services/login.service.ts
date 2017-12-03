import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()
export class loginService {
  isLoggedin: boolean;

  constructor(private _http: Http) {

  }

  loginfn(usercreds) {
    this.isLoggedin = false;
    var headers = new Headers();
    var creds = 'username=' + usercreds.username + '&password=' + usercreds.password;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    return new Promise((resolve) => {
      this._http.post('http://localhost/SmsGateway/index.php/login', creds, { headers: headers }).subscribe((data) => {
        if (data.json().success) {
          window.localStorage.setItem('auth_key', data.json().token);
          this.isLoggedin = true;
          resolve(this.isLoggedin)
        }
      })
    })
  }
}