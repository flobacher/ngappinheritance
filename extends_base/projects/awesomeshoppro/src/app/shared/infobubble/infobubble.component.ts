import { Component, OnInit } from '@angular/core';
import { Infobubble } from '@base/shared/infobubble/';

@Component({
  selector: 'as-infobubble',
  templateUrl: './infobubble.component.html'
})
export class InfobubbleComponent extends Infobubble implements OnInit {
  public headLine = 'INFO PRO';

  public content = 'CONTENT PRO';

  constructor() {
    super();
  }

  ngOnInit() {}
}
