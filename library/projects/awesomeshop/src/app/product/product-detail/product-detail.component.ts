import { Component } from '@angular/core';
import { ProductDetailComponent as BaseProductDetailComponent } from '@lib/product/product-detail/product-detail.component';

@Component({
  selector: 'as-product-detail',
  templateUrl: '../../../../../awesomelibrary/src/lib/product/product-detail/product-detail.component.html',
  styleUrls: [],
})
export class ProductDetailComponent extends BaseProductDetailComponent {}
