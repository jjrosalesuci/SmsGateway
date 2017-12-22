import { Component } from '@angular/core';

@Component({
    templateUrl: './page-sms.html'
})

export class SmsComponent{
    users:User[] = [{name:'Pepe'},{name: 'Juan'}];

    constructor(
    ){
        this.users;
    }
}

export class User{
    name: string;
}


