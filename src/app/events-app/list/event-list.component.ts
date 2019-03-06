import { IEvent } from './../common/event.model';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../common/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    templateUrl: './event-list.component.html',
    styles: [`
        .well div { color: red; }
    `]
})
export class EventListComponent implements OnInit {
    events: IEvent[];

    constructor(
        private eventService: EventService,
        private toastrService: ToastrService,
    ) {}

    ngOnInit() {
        this.eventService.getEvents().subscribe(events => {
            this.events = events;
        })
    }

    handleDetailClick(data) {
        this.toastrService.success(data);
    }
}