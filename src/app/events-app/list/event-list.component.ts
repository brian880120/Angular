import { Component, OnInit } from '@angular/core';
import { EventService } from '../common/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr;

@Component({
    selector: 'events-list',
    templateUrl: './event-list.component.html',
    styles: [`
        .well div { color: red; }
    `]
})
export class EventListComponent implements OnInit {
    events: any[]

    constructor(
        private eventService: EventService,
        private toastrService: ToastrService,
    ) {}

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleDetailClick(data) {
        this.toastrService.success(data);
    }
}