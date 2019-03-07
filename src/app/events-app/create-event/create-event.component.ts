import { EventService } from './../common/event.service';
import { IEvent } from './../common/event.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'create-event.component.html',
    styleUrls: ['./create-event.component.scss']
})

export class CreateEventComponent implements OnInit {
    isDirty: boolean = true;
    newEvent: IEvent
    constructor(
        private router: Router,
        private eventService: EventService
    ) { }

    ngOnInit() {
    }

    saveNewEvent(values) {
        this.eventService.saveEvent(values);
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}