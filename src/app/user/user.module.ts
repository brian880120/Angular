import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        FormsModule,
        UserRoutingModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
    ],
    providers: [
    ],
})
export class UserModule {}