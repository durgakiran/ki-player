import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from "@ngrx/store";
import { StoreModule } from "@ngrx/store";
import { NowPlaylistReducer } from '../../store/reducers/now-playlist.reducer';
import { PlayVideoReducer } from '../../store/reducers/now-playing.reducer';
import { VideoListComponent } from './video-list.component';
import { MediaPlayComponent } from '../media-play/media-play.component';
import { VideoDisplayListComponent } from '../video-display-list/video-display-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            StoreModule.forRoot({
                NowPlaylistReducer: NowPlaylistReducer,
                PlayVideoReducer: PlayVideoReducer
            }), RouterTestingModule
            ],
      declarations: [ VideoListComponent, MediaPlayComponent, VideoDisplayListComponent ]
    })
    .compileComponents();
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
