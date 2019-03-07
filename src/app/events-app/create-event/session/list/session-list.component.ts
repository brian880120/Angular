import { Component, OnInit, Input } from '@angular/core';
import { ISession } from 'src/app/events-app/common/event.model';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnInit {
    @Input()
    sessions: ISession[]

    constructor() { }

    ngOnInit() { }
}