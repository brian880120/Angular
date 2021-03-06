import { AuthService } from './../../../../user/auth.service';
import { UpvoteService } from './../vote/upvote.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from 'src/app/events-app/common/event.model';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html',
    styles: ['collapsible-well h6 { margin-top: -5px; margin-bottom: 10px; }'],
})

export class SessionListComponent implements OnInit, OnChanges {
    @Input()
    sessions: ISession[]

    @Input()
    filterBy: string

    @Input()
    sortBy: string

    visibleSessions: ISession[] = [];

    constructor(
        private upvoteService: UpvoteService,
        public auth: AuthService,
    ) { }

    ngOnInit() { }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ?
                this.visibleSessions.sort(this.sortByNameAsc) :
                this.visibleSessions.sort(this.sortByVotesDesc)
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }

    sortByNameAsc(s1: ISession, s2: ISession) {
        if (s1.name > s2.name) return 1;
        else if (s1.name === s2.name) return 0;
        else return -1;
    }

    sortByVotesDesc(s1: ISession, s2: ISession) {
        return s2.voters.length - s1.voters.length;
    }

    userHasVoted(session: ISession): boolean {
        return this.upvoteService.userHasVoted(session, this.auth.currentUser.userName);
    }

    toggleVote(session: ISession): void {
        if (this.userHasVoted(session)) {
            this.upvoteService.deleteVoter(session, this.auth.currentUser.userName);
        } else {
            this.upvoteService.addVoter(session, this.auth.currentUser.userName);
        }

        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(this.sortByVotesDesc);
        }
    }

    isUserAuthenticated() {
        return this.auth.isAuthenticated();
    }
}