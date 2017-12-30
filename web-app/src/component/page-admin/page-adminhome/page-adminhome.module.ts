import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { AdminHomeComponent } from './page-adminhome.component';
import { ErrorsComponent } from './errors/errors.component';
import { ChartComponent } from './chart/chart.component';
import { SmsCharthomeService } from '../../../services/sms-charthome.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ShowHidePasswordModule.forRoot()
    ],
    declarations: [
        AdminHomeComponent,
        ProjectInfoComponent,
        ErrorsComponent,
        ChartComponent
    ],
    providers:[SmsCharthomeService]

})
export class AdminHomeModule { }