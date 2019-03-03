import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app/events-app.component';
import { EventListComponent } from './events-app/list/event-list.component';
import { EventDetailComponent } from './events-app/details/event-detail.component';
import { NavbarComponent } from './common/nav/navbar.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventDetailComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
