import { Component, OnInit, onChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PlayVideo } from '../../store/reducers/now-playing.reducer';

@Component({
  selector: 'app-media-play',
  templateUrl: './media-play.component.html',
  styleUrls: ['./media-play.component.scss']
})
export class MediaPlayComponent implements OnInit, onChanges {
    @INPUT()
    nowPlaying: PlayVideo;
    safeURL = ';

  constructor(private _sanitizer: DomSanitizer){}

  ngOnInit() {
  }
  ngOnChanges(){
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=' + nowPlaying.VideoId);
    }
}
