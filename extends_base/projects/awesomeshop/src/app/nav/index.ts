import { Component, OnInit } from '@angular/core';

export interface RouterLinkDesc {
  path: string;
  label: string;
}

export class Nav implements OnInit {
  public get routes(): RouterLinkDesc[] {
    return this._routes;
  }

  protected _routes: RouterLinkDesc[] = [
    { path: '/', label: 'home' },
    { path: '/product', label: 'product' },
    { path: '/lazy', label: 'lazy' }
  ];

  constructor() {}

  ngOnInit() {}
}
