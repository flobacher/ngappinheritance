import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  }
];
