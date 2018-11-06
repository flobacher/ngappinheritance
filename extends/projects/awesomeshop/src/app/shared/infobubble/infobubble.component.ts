import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-infobubble',
  templateUrl: './infobubble.component.html',
  styleUrls: [],
})
export class InfobubbleComponent implements OnInit {
  public headLine = 'INFO';

  public content = 'CONTENT';

  constructor() {}

  ngOnInit() {}
}
