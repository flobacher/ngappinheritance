// I am only needed so that the code gets generated, even if I am a clone only

/// #if JIT
import { NgModule } from '@angular/core';
import { LazyModule as BaseLazyModule } from 'projects/awesomeshop/src/app/lazy/lazy.module';
import { declarations as baseDeclarations } from 'projects/awesomeshop/src/app/app.module';
import { merge } from '../../utils';

const declarationOverrides = [];
export const declarations = merge(baseDeclarations, declarationOverrides);

@NgModule({
  declarations: declarations as any[],
})
export class LazyModule extends BaseLazyModule {}
/// #endif

/// #if aot
// import { NgModule } from '@angular/core';

// import { LazyViewComponent } from 'projects/awesomeshop/src/app/lazy/lazy-view/lazy-view.component';
// import { SharedModule } from '../shared/shared.module';
// import { LazyRoutingModule } from 'projects/awesomeshop/src/app/lazy/lazy-routing.module';

// export const declarations = [LazyViewComponent];
// export const imports = [SharedModule, LazyRoutingModule];
// @NgModule({
//   declarations: declarations,
//   imports: imports,
// })
// export class LazyModule {}
/// #endif
