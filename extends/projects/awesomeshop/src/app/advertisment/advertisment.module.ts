import { NgModule } from '@angular/core';

import { BannerComponent } from './banner/banner.component';
import { SharedModule } from '../shared/shared.module';

export const declarations = [BannerComponent];
export const exports = [BannerComponent];

@NgModule({
  imports: [SharedModule],
  declarations: declarations,
  exports: exports,
})
export class AdvertismentModule {}
