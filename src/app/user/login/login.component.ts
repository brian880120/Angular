import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    userName: string
    password: string

    constructor(private authService: AuthService) {}

    login(formValues) {
        console.log(formValues);
    }
}