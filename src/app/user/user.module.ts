import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        UserRoutingModule
    ],
    declarations: [
        ProfileComponent,
    ],
    providers: [],
})
export class UserModule {}