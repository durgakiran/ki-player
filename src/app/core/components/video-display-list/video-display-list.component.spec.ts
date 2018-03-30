import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDisplayListComponent } from './video-display-list.component';

describe('VideoDisplayListComponent', () => {
  let component: VideoDisplayListComponent;
  let fixture: ComponentFixture<VideoDisplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
