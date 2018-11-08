import { Component } from '@angular/core';
import { ProductOverviewComponent as BaseProductOverviewComponent } from '@lib/product/product-overview/product-overview.component';

@Component({
  selector: 'as-product-overview',
  templateUrl: '../../../../../awesomelibrary/src/lib/product/product-overview/product-overview.component.html',
})
export class ProductOverviewComponent extends BaseProductOverviewComponent {}
