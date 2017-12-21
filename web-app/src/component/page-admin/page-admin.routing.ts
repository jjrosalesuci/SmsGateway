import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './page-admin';
import { SmsComponent } from './sms/page-sms.component';

const adminRoutes: Routes = [
	{ 
        path      : 'admin',
        children:[
            {
                path: '',
                component : AdminPageComponent,
            },
            {
                path: 'sms',
                component: SmsComponent,
                children:[
                    {
                        path: '',
                        component: SmsComponent
                    }
                ]
            }
        ]
	}
]

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);