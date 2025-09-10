import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { MemberDetailed } from '../features/members/member-detailed/member-detailed';
import { Lists } from '../features/lists/lists';
import { Messages } from '../features/messages/messages';
import { authGuard } from '../core/guards/auth-guard';
import { TestErrors } from '../features/test-errors/test-errors';
import { NotFound } from '../shared/errors/not-found/not-found';
import { ServerError } from '../shared/errors/server-error/server-error';
import { FlightSearch } from '../features/flight-search/flight-search';
import { Offers } from '../features/offers/offers';

export const routes: Routes = [
    {path: '', component: Home},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            { path: 'offers', component: Offers },
            { path: 'members/:id', component: MemberDetailed },
            { path: 'lists', component: Lists },
            { path: 'messages', component: Messages },
        ]
    },
    {path: 'flying', component: FlightSearch },
    {path: 'errors', component: TestErrors},
    {path: 'server-error', component: ServerError},
    {path: '**', component: NotFound}
];
