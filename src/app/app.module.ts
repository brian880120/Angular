import { LocationValidator } from './events-app/create-event/location-validator.directive';
import { UpvoteService } from './events-app/create-event/session/vote/upvote.service';
import { ModalTriggerDirective } from './common/simple-modal/modalTrigger.directive';
import { DurationPipe } from './events-app/common/duration.pipe';
import { CollapsibleWellComponent } from './events-app/common/collapsible-well/collapsible-well.component';
import { SessionListComponent } from './events-app/create-event/session/list/session-list.component';
import { CreateSessionComponent } from './events-app/create-event/session/create-session.component';
import { AuthService } from './user/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app/events-app.component';
import { EventListComponent } from './events-app/list/event-list.component';
import { ThumbnailComponent } from './events-app/thumbnail/thumbnail.component';
import { EventDetailsComponent } from './events-app/details/event-details.component';
import { CreateEventComponent } from './events-app/create-event/create-event.component';
import { NavbarComponent } from './common/nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { EventService } from './events-app/common/event.service';
import { TOASTR_TOKEN, Toastr } from './events-app/common/toastr.service';
import { JQ_TOKEN } from './events-app/common/jquery.service';
import { EventRouteActivator } from './events-app/details/event-route-activator.service';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { UpvoteComponent } from './events-app/create-event/session/vote/upvote.component';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    ThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    NavbarComponent,
    CollapsibleWellComponent,
    Error404Component,
    SimpleModalComponent,
    UpvoteComponent,
    DurationPipe,
    ModalTriggerDirective,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr,
    },
    {
        provide: JQ_TOKEN,
        useValue: jQuery,
    },
    AuthService,
    EventRouteActivator,
    {
        provide: 'canDeactivateCreateEvent',
        useValue: (component: CreateEventComponent) => {
            if (component.isDirty) {
                return window.confirm('You have not saved this event, do you really want to cancel?');
            }
            return true;
        }
    },
    UpvoteService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
