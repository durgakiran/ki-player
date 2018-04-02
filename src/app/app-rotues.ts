import { Routes, RouterModule } from "@angular/router";
import { AppContainerComponent } from "./containers/app-container/app-container.component";
export const ROUTES: Routes = [
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
