import { Routes } from '@angular/router';
import { DuckListComponent } from './components/duck-list/duck-list.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: DuckListComponent }, // Homepage (duck list)
  { path: 'about', component: AboutComponent }, // Example secondary route
];