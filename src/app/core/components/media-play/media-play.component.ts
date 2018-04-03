import { Component, OnChanges, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { PlayVideo } from "../../store/reducers/now-playing.reducer";

@Component({
  selector: "app-media-play",
  templateUrl: "./media-play.component.html",
  styleUrls: ["./media-play.component.scss"]
})
export class MediaPlayComponent implements OnChanges {
  @Input() nowPlaying: PlayVideo;
  safeURL: any;

  constructor(private _sanitizer: DomSanitizer) {}
  ngOnChanges() {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + this.nowPlaying.VideoId
    );
  }
}
