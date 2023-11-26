import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
