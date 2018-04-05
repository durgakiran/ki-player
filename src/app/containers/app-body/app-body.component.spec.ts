import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBodyComponent } from './app-body.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppContainerComponent } from '../app-container/app-container.component';
import { Routes } from '@angular/router';

describe('AppBodyComponent', () => {
  let component: AppBodyComponent;
  let fixture: ComponentFixture<AppBodyComponent>;

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
        RouterTestingModule.withRoutes(rotues)
      ],
      declarations: [ AppBodyComponent, AppContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
