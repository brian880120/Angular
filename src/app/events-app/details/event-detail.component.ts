import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-detail',
    templateUrl: './event-detail.component.html',
    styles: [`
        .pad-left { margin-left: 10px;}
        .well div {color: #bbb;}
        .thumbnail {min-height: 210px;}
    `]
})
export class EventDetailComponent {
    @Input()
    event: any
}