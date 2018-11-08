import { Component } from '@angular/core';

import { RootComponent as BaseRootComponent } from '@lib/root/root.component';

@Component({
  selector: 'as-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.less'],
})
export class RootComponent extends BaseRootComponent {}
