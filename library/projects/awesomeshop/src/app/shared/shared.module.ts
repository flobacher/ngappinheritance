import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfobubbleComponent } from './infobubble/infobubble.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InfobubbleComponent],
  exports: [InfobubbleComponent],
})
export class SharedModule {}
