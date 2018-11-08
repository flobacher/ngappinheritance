import { Component } from '@angular/core';
import { LazyViewComponent as BaseLazyViewComponent } from '@lib/lazy/lazy-view/lazy-view.component';

@Component({
  selector: 'as-lazy-view',
  templateUrl: '../../../../../awesomelibrary/src/lib/lazy/lazy-view/lazy-view.component.html',
})
export class LazyViewComponent extends BaseLazyViewComponent {}
