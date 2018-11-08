import { Component } from '@angular/core';
import { RootComponent as BaseRootComponent } from '@lib/root/root.component';

@Component({
  selector: 'as-root',
  templateUrl: '../../../../awesomelibrary/src/lib/root/root.component.html',
  styleUrls: ['../../../../awesomelibrary/src/lib/root/root.component.less'],
})
export class RootComponent extends BaseRootComponent {}
