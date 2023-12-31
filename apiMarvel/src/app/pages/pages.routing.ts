import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from '../guards/auth.guard';
import { DetailsComponent } from './dashboard/details/details.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

export const routes: Routes = [

    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [ AuthGuard ],
        children: [
    
          { path: '', component: DashboardComponent },

          {
            path: 'profile',
            component: ProfileComponent
          },

          { 
            path: 'details/:id', 
            component: DetailsComponent,
            children: [
              
              //{ path: 'details/comics', component: DashboardComponent },
            ]
          }
      
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