import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes, AppRoutingModule as BaseAppRoutingModule } from 'projects/awesomeshop/src/app/app-routing.module';

// add an additional route.. every other manipulation of the routes is possible ofc
routes.push({ path: 'crazy', loadChildren: './crazy/crazy.module#CrazyModule' });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule extends BaseAppRoutingModule {}
