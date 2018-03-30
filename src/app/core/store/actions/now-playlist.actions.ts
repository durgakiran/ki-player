import { Action } from '@ngrx/store';

export const LOAD_VIDEOS = 'LOAD_VIDEOS';
export const LOAD_VIDEOS_SUCCESS = 'LOAD_VIDEOS_SUCCESS';

export class NowPlaylistActions implements Action {
    readonly type = LOAD_VIDEOS;

    constructor(public payload: any) { }
}
export class NowPlaylistActionsSuccess implements Action {
    readonly type = LOAD_VIDEOS_SUCCESS;
    constructor(public payload: any) {}
}

export type Actions = NowPlaylistActions | NowPlaylistActionsSuccess;
