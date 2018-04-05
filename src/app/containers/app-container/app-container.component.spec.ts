import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContainerComponent } from './app-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

describe('AppContainerComponent', () => {
  let component: AppContainerComponent;
  let fixture: ComponentFixture<AppContainerComponent>;

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
      declarations: [ AppContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
