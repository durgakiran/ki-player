import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './components/video-list/video-list.component';
import { GetVideoService } from './services/get-video.service';
import { VideoContainerComponent } from './components/video-container/video-container.component';
import { VideoRouterRoutingModule } from './video-router/video-router-routing.module';
import { VideoDisplayListComponent } from './components/video-display-list/video-display-list.component';

@NgModule({
  imports: [
    CommonModule,
    VideoRouterRoutingModule
  ],
  declarations: [VideoListComponent, VideoContainerComponent, VideoDisplayListComponent],
  providers: [GetVideoService]
})
export class CoreModule { }
