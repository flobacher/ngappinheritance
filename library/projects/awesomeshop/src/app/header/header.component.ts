import { Component } from '@angular/core';

import { HeaderComponent as BaseHeaderComponent } from '@lib/header/header.component.ts';

@Component({
  selector: 'as-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent extends BaseHeaderComponent {}
