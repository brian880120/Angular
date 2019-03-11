import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { IEvent, ISession } from './event.model';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'

const EVENTS = [];

@Injectable()
export class EventService {
    constructor(private http: HttpClient) {}

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }

    getEvents(): Observable<IEvent[]> {
        return this.http.get<IEvent[]>('/api/events')
            .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
    }

    getEvent(id: number): Observable<IEvent> {
        return this.http.get<IEvent>('/api/events/' + id)
            .pipe(catchError(this.handleError<IEvent>('getEvents')));
    }

    saveEvent(newEvent: IEvent): void {
        newEvent.id = EVENTS.length + 1;
        newEvent.sessions = [];
        EVENTS.push(newEvent);
    }

    updateEvent(updatedEvent: IEvent): void {
        let index = EVENTS.findIndex(x => x.id === updatedEvent.id);
        EVENTS[index] = updatedEvent;
    }

    searchSessions(searchTerm: string): Observable<ISession[]> {
        let subject = new Subject<ISession[]>();
        let results: ISession[] = EVENTS.reduce((acc, event) => {
            return acc.concat(event.sessions.filter(session => {
                return session.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1;
            }).map((session: any) => {
                return {
                    ...session,
                    eventId: event.id,
                };
            }));
        }, []);

        setTimeout(() => {
            subject.next(results);
            subject.complete();
        }, 100);

        return subject;
    }
}

