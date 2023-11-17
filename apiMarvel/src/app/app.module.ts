import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';







@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    AuthModule,
    SharedModule,
    PagesModule
  ],
  exports: [
    RouterModule,
    AppRoutingModule,
    RouterLink,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
