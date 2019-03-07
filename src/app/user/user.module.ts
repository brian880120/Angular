import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule,
        CommonModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
    ],
    providers: [
    ],
})
export class UserModule {}