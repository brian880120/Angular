import { Component, Input } from '@angular/core';
import { IEvent } from '../common/event.model';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './thumbnail.component.html',
    styles: [`
        .pad-left { margin-left: 10px;}
        .well div {color: #bbb;}
        .thumbnail {min-height: 210px;}
    `]
})
export class ThumbnailComponent {
    @Input()
    event: any
}