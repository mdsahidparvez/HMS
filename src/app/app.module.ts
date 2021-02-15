import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../student-login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from 'src/admin-login/admin-login.component';
import { SignUpComponent } from 'src/sign-up/sign-up.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLoginComponent,
      SignUpComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
