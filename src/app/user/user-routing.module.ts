import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: 'profile',
    component: ProfileComponent,
}, {
    path: 'login',
    component: LoginComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
