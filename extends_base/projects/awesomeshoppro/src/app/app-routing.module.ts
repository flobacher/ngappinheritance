import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '@base/home/home.component';

export const routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: 'crazy', loadChildren: './crazy/crazy.module#CrazyModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
