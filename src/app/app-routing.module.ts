import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './portal/user/user.component';
import {AdminComponent} from './portal/admin/admin.component';
import {EmployeesComponent} from "./portal/admin/employees/employees.component";
import { RegisterComponent} from "./register/register.component";
import {PortalComponent} from "./portal/portal.component";
import {ProfileComponent} from "./profile/profile.component";
import { AuthGuard} from "./guards/auth.guard";
import {ManagerComponent} from "./portal/manager/manager.component";
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
    component: PortalComponent,
    children:[
      {path: 'portal/admin', component: AdminComponent, canActivate: [AdminGuard]},
      {path: 'portal/manager', component: ManagerComponent},
      {path: 'portal/user', component: UserComponent}
    ]
    // canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
