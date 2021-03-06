import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as NowPlaylistActions from "../../store/actions/now-playlist.actions";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"]
})
export class VideoListComponent implements OnInit {
  json$: Observable<AnalyserNode>;
  nowPlaying$ = this.store.select("PlayVideoReducer");
  searchTerm = "";
  constructor(private store: Store<any>, private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.searchTerm = params["id"];
      this.loadVideos();
    });
    this.json$ = this.store.select("NowPlaylistReducer");
    //console.log(JSON.stringify(this.json$));
  }
  loadVideos() {
    this.store.dispatch(
      new NowPlaylistActions.NowPlaylistActions(this.searchTerm)
    );
  }
}
