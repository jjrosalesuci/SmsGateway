// Libraries
import { Component }                      from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { ReactiveFormsModule } from 'angular2/forms';
import { AuthCheck } from '../../authcheck';

// Custom Components
import {NavigationComponent} from '../navigation/navigation';
import {HomePageComponent}   from '../page-home/page-home';
import {AboutPageComponent}  from '../page-about/page-about';
import {LoginPageComponent}  from '../page-login/page-login';
import {RegisterPageComponent}  from '../page-register/page-register';
import {AdminPageComponent}  from '../page-admin/page-admin';


@Component({
    selector    : 'my-app',
    templateUrl : 'dist/component/app/app.html',
	directives  : [	NavigationComponent,
					ROUTER_DIRECTIVES,
					ReactiveFormsModule
					]
})
@RouteConfig([
	{   
		path      : '/',
		name      : 'Home',
		component : HomePageComponent
	},
	{ 
		path      : '/about',
		name      : 'About',
		component : AboutPageComponent
	},
	{ 
		path      : '/login',
		name      : 'Login',
		component : LoginPageComponent
	},
	{ 
		path      : '/register',
		name      : 'Register',
		component : RegisterPageComponent
	},
	{ 
		path      : '/admin',
		name      : 'Admin',
		component : AdminPageComponent
	}

])
export class AppComponent { }