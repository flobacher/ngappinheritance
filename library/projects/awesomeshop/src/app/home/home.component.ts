import { Component } from '@angular/core';
import { HomeComponent as BaseHomeComponent } from '@lib/home/home.component';

@Component({
  selector: 'as-home',
  templateUrl: '../../../../awesomelibrary/src/lib/home/home.component.html',
})
export class HomeComponent extends BaseHomeComponent {}
