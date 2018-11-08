import { Component } from '@angular/core';

import { HeaderComponent as BaseHeaderComponent } from '@lib/header/header.component';

// override/extend functionality but keep template and styles
@Component({
  selector: 'as-header',
  templateUrl: '../../.././../awesomelibrary/src/lib/header/header.component.html',
  styleUrls: ['../../.././../awesomelibrary/src/lib/header/header.component.less'],
})
export class HeaderComponent extends BaseHeaderComponent {
  public subtitle = 'ManagementView';
}
