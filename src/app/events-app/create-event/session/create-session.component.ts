import { ISession } from './../../common/event.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { restrictedWords } from '../../common/input-validators';
import { timingSafeEqual } from 'crypto';

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.scss'],
})
export class CreateSessionComponent implements OnInit {
    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl
    @Output()
    saveNewSession = new EventEmitter();

    @Output()
    cancelAddSession = new EventEmitter();

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [
            Validators.required,
            Validators.maxLength(10),
            restrictedWords(['abc'])
        ]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        });
    }

    saveSession(formValues): void {
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    }

    cancel(): void {
        this.cancelAddSession.emit();
    }
}