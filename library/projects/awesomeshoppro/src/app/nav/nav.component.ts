import { Component, OnInit } from '@angular/core';
import { NavComponent as BaseNavComponent } from 'projects/awesomeshop/src/app/nav/nav.component';

// extend existing component -> template is referenced, styles are overridden
@Component({
  selector: 'as-nav',
  templateUrl: '../../../../awesomeshop/src/app/nav/nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent extends BaseNavComponent implements OnInit {
  constructor() {
    super();
    this._routes.push({ path: '/crazy', label: 'crazy' });
  }

  ngOnInit() {}
}
