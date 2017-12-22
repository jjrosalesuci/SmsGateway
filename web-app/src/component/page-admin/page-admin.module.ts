import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './page-admin';
import { AdminHomeComponent } from '../page-admin/page-adminhome.component';
import { adminRouting } from '../page-admin/page-admin.routing'
import { SmsComponent } from './sms/page-sms.component';
import { SmsDetailsComponent } from '../page-admin/sms/page-smsdetails.component';
import { SmsHomeComponent } from '../page-admin/sms/sms.home.component';
import { PaymentsComponent } from '../page-admin/payments/payments.component';


@NgModule({
    imports:[
        CommonModule,
        adminRouting
    ],
    declarations:[
        AdminPageComponent,
        SmsComponent,
        SmsDetailsComponent,
        SmsHomeComponent,
        AdminHomeComponent,
        PaymentsComponent
    ]
})

export class AdminModule {}

