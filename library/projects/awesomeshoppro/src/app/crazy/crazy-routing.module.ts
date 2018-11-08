import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrazyViewComponent } from './crazy-view/crazy-view.component';

const routes: Routes = [{ path: '', component: CrazyViewComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrazyRoutingModule {}
