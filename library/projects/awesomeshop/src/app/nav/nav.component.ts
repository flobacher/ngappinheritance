import { Component } from '@angular/core';
import { NavComponent as BaseNavComponent } from '@lib/nav/nav.component';

@Component({
  selector: 'as-nav',
  templateUrl: '../../../../awesomelibrary/src/lib/nav/nav.component.html',
  styleUrls: ['../../../../awesomelibrary/src/lib/nav/nav.component.less'],
})
export class NavComponent extends BaseNavComponent {}
