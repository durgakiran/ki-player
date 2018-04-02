import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlayComponent } from './media-play.component';

describe('MediaPlayComponent', () => {
  let component: MediaPlayComponent;
  let fixture: ComponentFixture<MediaPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
