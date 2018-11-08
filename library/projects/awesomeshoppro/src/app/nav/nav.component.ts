import { Component } from '@angular/core';
import { NavComponent as BaseNavComponent } from '@lib/nav/nav.component';

// extend existing component -> template is referenced, styles are overridden
@Component({
  selector: 'as-nav',
  templateUrl: '../../../../awesomelibrary/src/lib/nav/nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent extends BaseNavComponent {
  constructor() {
    super();
    this._routes.push({ path: '/crazy', label: 'crazy' });
  }
}
