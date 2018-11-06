import { Component, OnInit } from '@angular/core';

interface RouterLinkDesc {
  path: string;
  label: string;
}

@Component({
  selector: 'as-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit {
  public get routes(): RouterLinkDesc[] {
    return this._routes;
  }

  protected _routes: RouterLinkDesc[] = [
    { path: '/', label: 'home' },
    { path: '/product', label: 'product' },
    { path: '/lazy', label: 'lazy' },
  ];

  constructor() {}

  ngOnInit() {}
}
