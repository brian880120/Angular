import { JQ_TOKEN } from './../../events-app/common/jquery.service';
import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    @Input('modal-trigger') modalId: string;
    private el: HTMLElement;
    constructor(
        @Inject(JQ_TOKEN) private $: any,
        ref: ElementRef,
    ) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}