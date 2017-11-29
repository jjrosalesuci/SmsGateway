import { Injectable } from 'angular2/core';  

 @Injectable()
 export class loginService {  
    login(username: string, password: string): boolean {
      return true; 
    } 
 }