import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    currentUser: IUser

    loginUser(userName: string, password: string): void {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa',
        };
    }

    updateUser(firstName: string, lastName: string): void {
        this.currentUser = {
            ...this.currentUser,
            firstName,
            lastName,
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}