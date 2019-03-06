import { IEvent } from './../common/event.model';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../common/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `],
})

export class EventDetailsComponent implements OnInit {
    event: IEvent
    constructor(
        private eventService: EventService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}