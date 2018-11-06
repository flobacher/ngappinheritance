import { Component, OnInit } from '@angular/core';

import { HeaderComponent as BaseHeaderComponent } from 'projects/awesomeshop/src/app/header/header.component';

// override/extend functionality but keep template and styles
@Component({
  selector: 'as-header',
  templateUrl: '../../../../awesomeshop/src/app/header/header.component.html',
  styleUrls: ['../../../../awesomeshop/src/app/header/header.component.less'],
})
export class HeaderComponent extends BaseHeaderComponent implements OnInit {
  public subtitle = 'ManagementView';
  constructor() {
    super();
  }

  ngOnInit() {}
}
