import { Routes } from "@angular/router";
import { DuckListComponent } from "./components/duck-list/duck-list.component";
import { AboutComponent } from "./components/about/about.component";

// #11 Angular Routing
// #11a Route Configuration
// Routes define which component to display for each URL path
export const routes: Routes = [
  // #11b Default Route
  // The empty path '' represents the application's root/home URL
  { path: "", component: DuckListComponent }, // Homepage (duck list)

  // #11c Named Routes
  // Named routes allow navigation to specific application sections
  { path: "about", component: AboutComponent }, // Example secondary route

  // Common route patterns also include:
  // - Parameterized routes: { path: 'duck/:id', component: DuckDetailComponent }
  // - Wildcard route: { path: '**', component: PageNotFoundComponent }
  // - Redirect routes: { path: 'old-path', redirectTo: 'new-path', pathMatch: 'full' }
];
