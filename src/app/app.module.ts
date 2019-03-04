import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app/events-app.component';
import { EventListComponent } from './events-app/list/event-list.component';
import { ThumbnailComponent } from './events-app/thumbnail/thumbnail.component';
import { NavbarComponent } from './common/nav/navbar.component';

import { EventService } from './events-app/common/event.service';
import { ToastrService } from './events-app/common/toastr.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    ThumbnailComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    ToastrService,
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
