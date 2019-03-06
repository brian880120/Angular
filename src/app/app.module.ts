import { AuthService } from './user/auth.service';
import { BrowserModule } from '@angular/platform-browser';
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
import { ToastrService } from './events-app/common/toastr.service';
import { EventRouteActivator } from './events-app/details/event-route-activator.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    ThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavbarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    EventService,
    ToastrService,
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
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
