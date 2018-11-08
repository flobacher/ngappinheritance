import { OnInit } from '@angular/core';

interface RouterLinkDesc {
  path: string;
  label: string;
}

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
