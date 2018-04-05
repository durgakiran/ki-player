import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AppNavbarComponent} from './containers/app-navbar/app-navbar.component';
import {AppBodyComponent} from './containers/app-body/app-body.component';
import {AppSidebarComponent} from './containers/app-sidebar/app-sidebar.component';
import {AppContainerComponent} from './containers/app-container/app-container.component';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes } from "@angular/router";
describe('AppComponent', () => {
  const rotues: Routes = [
    {
      path: "",
      component: AppContainerComponent,
      children: [{ path: "", redirectTo: "/search/", pathMatch: "full" }],
      pathMatch: "full"
    },
    {
      path: "search",
      component: AppContainerComponent,
      children: [{ path: "", redirectTo: "/search/", pathMatch: "full" }],
      pathMatch: "full"
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(rotues)
      ],
      declarations: [
        AppComponent,
        AppNavbarComponent,
        AppBodyComponent,
        AppSidebarComponent,
        AppContainerComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
