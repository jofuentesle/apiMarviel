import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [

    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [authGuard],
        children: [
    
          { path: '', component: DashboardComponent },
      
        ]
      },
]

@NgModule({
    imports: [
      RouterModule.forChild( routes )
    ],
    exports: [
      RouterModule
    ]
  })
  export class PagesRoutingModule { }