import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from "../page-about/page-about";
import { HomePageComponent } from "../page-home/page-home";
import { LoginPageComponent } from "../page-login/page-login";
import { RegisterPageComponent } from "../page-register/page-register";
import { NotFoundComponent } from "../not-found/not-found.component";

const appRoute: Routes = [
    {   
		path      : '',
		component : HomePageComponent
	},
	{ 
		path      : 'about',
		component : AboutPageComponent
	},
	{ 
		path      : 'login',
		component : LoginPageComponent
	},
	{ 
		path      : 'register',
		component : RegisterPageComponent
	},
	{ 
		path      : 'not-found',
		component : NotFoundComponent
	},
	{ 
		path      : '**',
		component : NotFoundComponent
	}



]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoute);