import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import { catchError, map } from 'rxjs/operators';

import { GetVideoService } from '../../services/get-video.service';
import * as NowPlaylistActions from '../actions/now-playlist.actions';

@Injectable()
export class NowPlaylistEffects {
    constructor(private _GetVideoService: GetVideoService, private actions$: Actions) { }

    @Effect()
    loadVideos$ = this.actions$.ofType(NowPlaylistActions.LOAD_VIDEOS).switchMap((action: NowPlaylistActions.NowPlaylistActions) => {
        return this._GetVideoService.getVideos(action.payload)
            .pipe(map(resp => new NowPlaylistActions.NowPlaylistActionsSuccess({ ...resp.body })), catchError(err => err));
    });
}
