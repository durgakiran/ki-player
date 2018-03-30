import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoContainerComponent } from '../components/video-container/video-container.component';
import { VideoListComponent } from '../components/video-list/video-list.component';

const routes: Routes = [
  { path: 'search/:id', component: VideoContainerComponent,
        children: [
            {path: '', component: VideoListComponent }
        ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRouterRoutingModule { }
