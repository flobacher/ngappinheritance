import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfobubbleComponent } from './infobubble/infobubble.component';

export const declarations = [InfobubbleComponent];
export const exports = [InfobubbleComponent];

@NgModule({
  imports: [CommonModule],
  declarations: declarations,
  exports: exports,
})
export class SharedModule {}
