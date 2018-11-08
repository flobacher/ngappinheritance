import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'crazy', loadChildren: './crazy/crazy.module#CrazyModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
