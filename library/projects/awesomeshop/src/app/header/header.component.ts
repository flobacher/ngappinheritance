import { Component } from '@angular/core';
import { HeaderComponent as BaseHeaderComponent } from '@lib/header/header.component.ts';

@Component({
  selector: 'as-header',
  templateUrl: '../../../../awesomelibrary/src/lib/header/header.component.html',
  styleUrls: ['../../../../awesomelibrary/src/lib/header/header.component.less'],
})
export class HeaderComponent extends BaseHeaderComponent {}
