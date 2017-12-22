import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './page-admin';
import { AdminHomeComponent } from './page-adminhome.component';
import { SmsComponent } from './sms/page-sms.component';
import { SmsDetailsComponent } from './sms/page-smsdetails.component';
import { SmsHomeComponent } from './sms/sms.home.component';
import { PaymentsComponent } from '../page-admin/payments/payments.component';




const adminRoutes: Routes = [
    {
        path: 'admin',
        children: [
            {
                path: '',
                component: AdminPageComponent,
                children:[
                    {
                        path:'',
                        component: AdminHomeComponent
                    },
                    {
                        path: 'sms',
                        component: SmsComponent,
                        children: [
                            {
                                path: '',
                                component: SmsHomeComponent
                            },
                            {
                                path: 'details',
                                component: SmsDetailsComponent
                            }
                        ]
                    },
                    {
                        path: 'pagos',
                        component: PaymentsComponent,
                    }
                ]
            }
        ]
    }
]

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);