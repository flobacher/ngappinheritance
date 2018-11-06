import { NgModule } from '@angular/core';
import { CrazyRoutingModule } from './crazy-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CrazyViewComponent } from './crazy-view/crazy-view.component';

// this is an additional module
@NgModule({
  declarations: [CrazyViewComponent],
  imports: [CrazyRoutingModule, SharedModule],
})
export class CrazyModule {}
