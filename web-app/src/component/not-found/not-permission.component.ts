import { Component, OnInit } from '@angular/core';

@Component({
    template: `
    <div class="jumbotron text-center">
        <h1>Can't Access</h1>
        <p>You dont have permission to see this page. Please <a routerLink = "/login">Login</a>.</p> 
    </div>
    `
})
export class NotPermission implements OnInit {
    constructor() { }

    ngOnInit() { }
}