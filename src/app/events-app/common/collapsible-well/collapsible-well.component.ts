import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: './collapsible-well.component.html'
})

export class CollapsibleWellComponent implements OnInit {
    visible: Boolean = true;

    constructor() { }

    ngOnInit() { }

    toggleContent() {
        this.visible = !this.visible;
    }
}