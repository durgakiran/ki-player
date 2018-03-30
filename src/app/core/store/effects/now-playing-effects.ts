import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import { catchError, map } from 'rxjs/operators';

import * as PLayVideoActions from '../actions/now-playing.actions';

@Injectable()
export class PlayVideoEffects {
    constructor(private actions$: Actions) { }

}
