import { EventResolver } from './events-app/common/event-resolver.service';
import { CreateSessionComponent } from './events-app/create-event/session/create-session.component';
import { CreateEventComponent } from './events-app/create-event/create-event.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events-app/list/event-list.component';
import { EventDetailsComponent } from './events-app/details/event-details.component';

const routes: Routes = [{
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
}, {
    path: 'events/session/new',
    component: CreateSessionComponent,
}, {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: {
        event: EventResolver,
    }
}, {
    path: 'events',
    component: EventListComponent,
}, {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
}, {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
