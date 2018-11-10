import { Component } from '@angular/core';

import { Header } from './index';

@Component({
  selector: 'as-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent extends Header {}
