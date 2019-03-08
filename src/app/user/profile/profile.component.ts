import { Toastr, TOASTR_TOKEN } from './../../events-app/common/toastr.service';
import { AuthService } from './../auth.service';

import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup
    private firstName: FormControl
    private lastName: FormControl

    constructor(
        private auth: AuthService,
        private router: Router,
        @Inject(TOASTR_TOKEN) private toastr: Toastr
    ) {}

    ngOnInit() {
        this.firstName = new FormControl(
            this.auth.currentUser ? this.auth.currentUser.firstName : '',
            Validators.required
        );
        this.lastName = new FormControl(
            this.auth.currentUser ? this.auth.currentUser.lastName : '',
            Validators.required
        );
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
        })
    }

    cancel() {
        this.router.navigate(['events'])
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.auth.updateUser(formValues.firstName, formValues.lastName);
            this.toastr.success('Profile saved');
        }
    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched;
    }
}