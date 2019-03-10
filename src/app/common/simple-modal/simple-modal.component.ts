import { JQ_TOKEN } from './../../events-app/common/jquery.service';
import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';

@Component({
    selector: 'simple-modal',
    templateUrl: './simple-modal.component.html',
    styleUrls: ['./simple-modal.component.scss'],
})

export class SimpleModalComponent implements OnInit {
    @Input()
    title: string;

    @ViewChild('modalContainer') containerEl: ElementRef

    @Input()
    elementId: string;

    constructor(@Inject(JQ_TOKEN) private $: any) { }

    ngOnInit() { }

    closeModal() {
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}