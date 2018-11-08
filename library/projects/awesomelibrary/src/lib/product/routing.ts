import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductOverviewComponent,
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    pathMatch: 'full',
  },
];
