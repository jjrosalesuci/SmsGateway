import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './page-admin';
import { SmsComponent } from './sms/page-sms.component';
import { SmsDetailsComponent } from './sms/page-smsdetails.component';

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
                    },
                    {
                        path: ':id',
                        component: SmsDetailsComponent
                    }
                ]
            }
        ]
	}
]

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);