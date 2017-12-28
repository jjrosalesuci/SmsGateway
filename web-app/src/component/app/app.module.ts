import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { appRouting } from "./app.routing";
import { AppComponent } from "./app.component";
import { AboutPageComponent } from "../page-about/page-about";
import { AdminModule } from "../page-admin/page-admin.module";
import { HomePageComponent } from "../page-home/page-home";
import { LoginPageComponent } from "../page-login/page-login";
import { RegisterPageComponent } from "../page-register/page-register";
import { NavigationComponent } from "../navigation/navigation";
import { NotFoundComponent } from "../not-found/not-found.component";
import { CollapseDirective } from 'ngx-bootstrap';
import { AuthGuard } from '../../services/auth-guard.service';
import { loginService } from '../../services/login.service';
import { NotPermission } from '../not-found/not-permission.component';
import { PassRecoveryComponent } from "../pass-recovery/pass-recovery.component";



@NgModule({
    imports: [  BrowserModule,
                appRouting,
                ReactiveFormsModule,
                HttpModule,
                AdminModule
    ],
    declarations: [ 
                    AppComponent, 
                    AboutPageComponent,
                    HomePageComponent,
                    LoginPageComponent,
                    RegisterPageComponent,
                    NavigationComponent,
                    NotFoundComponent,
                    CollapseDirective,
                    NotPermission,
                    PassRecoveryComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ AuthGuard, loginService ]
})

export class AppModule{}