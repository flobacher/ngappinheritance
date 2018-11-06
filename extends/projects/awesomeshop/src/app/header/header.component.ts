import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  public subtitle = 'CustomerView';
  public title = 'awesome shop';
  constructor() {}

  ngOnInit() {}
}
