import * as PlayVideoActions from "../actions/now-playing.actions";

export interface PlayVideo {
  VideoId: string;
  play: boolean;
}

const initialVideo: PlayVideo = {
  VideoId: "",
  play: false
};

export function PlayVideoReducer(
  state = initialVideo,
  action: PlayVideoActions.PlayActions
): PlayVideo {
  switch (action.type) {
    case PlayVideoActions.PLAY_VIDEO:
      const VideoId = action.payload;
      const play = true;
      return { ...initialVideo, VideoId, play };

    default:
      return state;
  }
}
