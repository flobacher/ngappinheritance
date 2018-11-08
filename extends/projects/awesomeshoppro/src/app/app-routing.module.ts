import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'projects/awesomeshop/src/app/home/home.component';

// add an additional route.. every other manipulation of the routes is possible ofc

export const routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'lazy', loadChildren: 'projects/awesomeshop/src/app/lazy/lazy.module#LazyModule' },
  { path: 'crazy', loadChildren: 'projects/awesomeshoppro/src/app/crazy/crazy.module#CrazyModule' }
];
// const routesAdditional = [];
// const routesFinal = routes.concat(routesAdditional);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
