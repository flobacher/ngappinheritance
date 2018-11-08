import { Component } from '@angular/core';
import { HomeComponent as BaseHomeComponent } from '@lib/home/home.component';

@Component({
  selector: 'as-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent extends BaseHomeComponent {}
