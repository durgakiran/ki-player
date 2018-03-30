import * as NowPlaylistActions from '../actions/now-playlist.actions';

export interface INowPlaylist {
        videos: any[];
        selectedId: string;
        filter: string;
        repeat: boolean;
}

const intialState: INowPlaylist = {
        videos: [],
        selectedId: '',
        filter: '',
        repeat: false
};

export function NowPlaylistReducer(state = intialState, action: NowPlaylistActions.Actions): INowPlaylist {
    switch (action.type) {
        case NowPlaylistActions.LOAD_VIDEOS_SUCCESS:
            const videos = action.payload.items;
            return {...state, videos};
        default:
            return state;

    }
}
