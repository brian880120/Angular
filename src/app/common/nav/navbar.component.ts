import { EventService } from './../../events-app/common/event.service';
import { ISession } from './../../events-app/common/event.model';
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
    searchTerm: string = '';
    simpleModalTitle: string = 'Matching Sessions';
    foundSessions: ISession[];

    constructor(
        public auth: AuthService,
        private eventService: EventService,
    ) {}

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(results => {
            this.foundSessions = results;
        })
    }
}