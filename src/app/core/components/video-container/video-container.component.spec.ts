import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {  Routes } from "@angular/router";

import { VideoContainerComponent } from './video-container.component';
import { VideoListComponent } from '../video-list/video-list.component';
import { MediaPlayComponent } from '../media-play/media-play.component';
import { VideoDisplayListComponent } from '../video-display-list/video-display-list.component';
describe('VideoContainerComponent', () => {
  let component: VideoContainerComponent;
  let fixture: ComponentFixture<VideoContainerComponent>;
  
  const routes: Routes = [
  { path: 'search/:id', component: VideoContainerComponent,
        children: [
            {path: '', component: VideoListComponent }
        ]
}
];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ VideoContainerComponent, VideoListComponent, MediaPlayComponent, VideoDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
