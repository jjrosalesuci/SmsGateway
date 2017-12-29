import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { AdminHomeComponent } from './page-adminhome.component';
import { ErrorsComponent } from './errors/errors.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
    imports: [
        CommonModule,
        ShowHidePasswordModule.forRoot()
    ],
    declarations: [
        AdminHomeComponent,
        ProjectInfoComponent,
        ErrorsComponent,
        ChartComponent
    ]

})
export class AdminHomeModule { }