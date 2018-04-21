import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {EmployeesComponent} from "./portal/users/users.component";
import { RegisterComponent} from "./register/register.component";
import {PortalComponent} from "./portal/portal.component";
import {ProfileComponent} from "./profile/profile.component";
import { AuthGuard} from "./guards/auth.guard";
import {AdminGuard} from "./guards/admin.guard";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'portal',
    component: PortalComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
