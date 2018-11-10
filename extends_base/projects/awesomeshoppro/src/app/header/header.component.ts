import { Component } from '@angular/core';

import { Header } from '@base/header';

// override/extend functionality but keep template and styles
@Component({
  selector: 'as-header',
  templateUrl: '../../../../awesomeshop/src/app/header/header.component.html',
  styleUrls: ['../../../../awesomeshop/src/app/header/header.component.less']
})
export class HeaderComponent extends Header {
  public subtitle = 'ManagementView';
  constructor() {
    super();
  }
}
