import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnChanges {
  @Input()
  list: any;
  data = {};
  constructor() { }

  ngOnChanges() {
    this.data = JSON.stringify(this.list);
  }

}
