import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [CommonModule, ProductRoutingModule],
  declarations: [ProductOverviewComponent, ProductDetailComponent],
})
export class ProductModule {}
