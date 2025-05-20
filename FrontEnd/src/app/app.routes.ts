import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserFormComponent } from './components/dashboard/user-form/user-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'User Dashboard'
  },
  {
    path: 'users/add',
    component: UserFormComponent,
    title: 'Add User'
  },
  {
    path: 'users/:id',
    component: UserFormComponent,
    title: 'Edit User'
  }
];
