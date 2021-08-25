import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { DisplayUserComponent } from './pages/display-user/display-user.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebInterceptor } from './services/web.interceptorservice';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ReactiveFormComponent,
    EditFormComponent,
    DisplayUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, NgbModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:WebInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
