import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { appRouting } from "./app.routing";
import { AppComponent } from "./app.component";
import { AboutPageComponent } from "../page-about/page-about";
import { AdminPageComponent } from "../page-admin/page-admin";
import { HomePageComponent } from "../page-home/page-home";
import { LoginPageComponent } from "../page-login/page-login";
import { RegisterPageComponent } from "../page-register/page-register";
import { NavigationComponent } from "../navigation/navigation";
import { NotFoundComponent } from "../not-found/not-found.component";


@NgModule({
    imports: [  BrowserModule,
                appRouting,
                ReactiveFormsModule,
                HttpModule
    ],
    declarations: [ 
                    AppComponent, 
                    AboutPageComponent,
                    AdminPageComponent,
                    HomePageComponent,
                    LoginPageComponent,
                    RegisterPageComponent,
                    NavigationComponent,
                    NotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule{}