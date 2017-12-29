import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './page-admin';
import { AdminHomeModule } from '../page-admin/page-adminhome/page-adminhome.module';
import { adminRouting } from '../page-admin/page-admin.routing'
import { SmsComponent } from './sms/page-sms.component';
import { SmsDetailsComponent } from '../page-admin/sms/page-smsdetails.component';
import { SmsHomeComponent } from '../page-admin/sms/sms.home.component';
import { PaymentsComponent } from '../page-admin/payments/payments.component';



@NgModule({
    imports:[
        CommonModule,
        adminRouting,
        AdminHomeModule,
    ],
    declarations:[
        AdminPageComponent,
        SmsComponent,
        SmsDetailsComponent,
        SmsHomeComponent,
        PaymentsComponent
    ]
})

export class AdminModule {}

