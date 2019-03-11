import { Injectable } from '@angular/core';
import { ISession } from 'src/app/events-app/common/event.model';

@Injectable()
export class UpvoteService {
    deleteVoter(session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => {
            return voter !== voterName;
        });
    }

    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(voter => voter === voterName);
    }
}