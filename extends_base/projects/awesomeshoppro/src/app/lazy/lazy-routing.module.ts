import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyViewComponent } from '@base/lazy/lazy-view/lazy-view.component';

export const routes: Routes = [{ path: '', component: LazyViewComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}
