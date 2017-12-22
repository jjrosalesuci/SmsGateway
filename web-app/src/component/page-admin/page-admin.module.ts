import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './page-admin';
import { SmsComponent } from './sms/page-sms.component';
import { adminRouting } from '../page-admin/page-admin.routing'
import { SmsDetailsComponent } from '../page-admin/sms/page-smsdetails.component';

@NgModule({
    imports:[
        adminRouting
    ],
    declarations:[
        AdminPageComponent,
        SmsComponent,
        SmsDetailsComponent
    ]
})

export class AdminModule {}

