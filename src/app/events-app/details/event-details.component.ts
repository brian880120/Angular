import { ISession } from 'src/app/events-app/common/event.model';
import { IEvent } from './../common/event.model';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../common/event.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        a { cursor: pointer }
    `],
})

export class EventDetailsComponent implements OnInit {
    event: IEvent
    addMode: Boolean
    filterBy: string = 'all';
    sortBy: string = 'name';

    constructor(
        private eventService: EventService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id']);
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(newSession: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        newSession.id = nextId + 1;
        this.event.sessions.push(newSession);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}