import { AuthService } from './../../user/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: [
        './navbar.component.scss',
    ]
})
export class NavbarComponent {
    constructor(public auth: AuthService) {}
}