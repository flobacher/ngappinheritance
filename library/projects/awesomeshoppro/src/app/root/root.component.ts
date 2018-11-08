import { Component } from '@angular/core';

import { RootComponent as BaseRootComponent } from 'projects/awesomeshop/src/app/root/root.component';

@Component({
  selector: 'as-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.less'],
})
export class RootComponent extends BaseRootComponent {}
