import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './dashboard/details/details.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    NopagefoundComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [ 
    DashboardComponent,
    NopagefoundComponent 
  ]
})
export class PagesModule { }
