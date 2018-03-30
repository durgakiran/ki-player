import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetVideoService {
  url = environment.youtube.URL;
  key = environment.youtube.API_KEY;
  constructor(private http: HttpClient) { }
  /**
   * get a list of videos based on search
   */
  getVideos(searchTerm): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.url,
      { observe: 'response', params: { 'part': 'snippet', 'key': this.key, 'maxResults': '15', 'type': 'video', 'q': searchTerm } }
    );
  }

}
