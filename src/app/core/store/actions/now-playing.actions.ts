import { Action } from '@ngrx/store';

export const PLAY_VIDEO = 'PLAY_VIDEO';
export const PAUSE_VIDEO = 'PAUSE_VIDEO';

export class PlayVideo implements Action {
    readonly type = PLAY_VIDEO;
    constructor(public payload: any) { }
}


export type PlayActions = PlayVideo;
