/// #if JIT
import { NgModule } from '@angular/core';

import { declarations as baseDeclarations, SharedModule as BaseSharedModule } from 'projects/awesomeshop/src/app/shared/shared.module';
import { InfobubbleComponent } from './infobubble/infobubble.component';
import { merge } from '../../utils';

// add additional shared components here
const overrides = [InfobubbleComponent];
const declarations = merge(baseDeclarations, overrides);
const exports = declarations;

@NgModule({
  declarations: declarations as any[],
  exports: exports as any[]
})
export class SharedModule extends BaseSharedModule {}
/// #endif

/// #if AOT
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { InfobubbleComponent } from './infobubble/infobubble.component';
// import { SharedModule as BaseSharedModule } from 'projects/awesomeshop/src/app/shared/shared.module';

// export const declarations = [InfobubbleComponent];
// export const exports = declarations;

// @NgModule({
//   imports: [CommonModule],
//   declarations: declarations as any[],
//   exports: exports as any[],
// })
// export class SharedModule {}
/// #endif
