import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { INowPlaylist } from '../../store/reducers/now-playlist.reducer';


@Component({
  selector: 'app-video-display-list',
  templateUrl: './video-display-list.component.html',
  styleUrls: ['./video-display-list.component.scss']
})
export class VideoDisplayListComponent implements OnInit, OnChanges {
  @Input()
  list: INowPlaylist;
  videos: any[];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.videos = this.list.videos;
  }
}
