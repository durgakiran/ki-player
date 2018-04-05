import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { GetVideoService } from './get-video.service';

describe('GetVideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
      providers: [GetVideoService]
    });
  });

  it('should be created', inject([GetVideoService], (service: GetVideoService) => {
    expect(service).toBeTruthy();
  }));
});
