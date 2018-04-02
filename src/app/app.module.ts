import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { FormsModule } from "@angular/forms";

import { AppNavbarComponent } from "./containers/app-navbar/app-navbar.component";
import { ROUTES } from "./app-rotues";
import { AppBodyComponent } from "./containers/app-body/app-body.component";
import { AppSidebarComponent } from "./containers/app-sidebar/app-sidebar.component";
import { AppContainerComponent } from "./containers/app-container/app-container.component";
import { NowPlaylistReducer } from "./core/store/reducers/now-playlist.reducer";
import { PlayVideoReducer } from "./core/store/reducers/now-playing.reducer";
import { NowPlaylistEffects } from "./core/store/effects/now-playlist-effets";

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppBodyComponent,
    AppSidebarComponent,
    AppContainerComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot({
      NowPlaylistReducer: NowPlaylistReducer,
      PlayVideoReducer: PlayVideoReducer
    }),
    EffectsModule.forRoot([NowPlaylistEffects]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
