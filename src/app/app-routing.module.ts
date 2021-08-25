import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayUserComponent } from './pages/display-user/display-user.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-info', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'register', component: ReactiveFormComponent },
  { path: 'edit-user', component: EditFormComponent },
  { path: 'edit-user/:id', component: EditFormComponent },
  { path: 'user-info', component: DisplayUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
