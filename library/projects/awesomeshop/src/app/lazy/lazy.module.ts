import { NgModule } from '@angular/core';

import { LazyRoutingModule } from './lazy-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LazyViewComponent } from './lazy-view/lazy-view.component';
import { declarations as baseDeclarations } from '@lib/lazy';

export const declarations = [...baseDeclarations];
export const imports = [SharedModule, LazyRoutingModule];

@NgModule({
  declarations: declarations,
  imports: imports,
})
export class LazyModule {}
