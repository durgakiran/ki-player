import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from "@ngrx/store";
import { StoreModule } from "@ngrx/store";
import { NowPlaylistReducer } from '../../store/reducers/now-playlist.reducer';
import { PlayVideoReducer } from '../../store/reducers/now-playing.reducer';
import { VideoDisplayListComponent } from './video-display-list.component';

describe('VideoDisplayListComponent', () => {
  let component: VideoDisplayListComponent;
  let fixture: ComponentFixture<VideoDisplayListComponent>;
let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            StoreModule.forRoot({
                NowPlaylistReducer: NowPlaylistReducer,
                PlayVideoReducer: PlayVideoReducer
            })
            ],
      declarations: [ VideoDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDisplayListComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
