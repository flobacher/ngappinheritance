import { Component, OnInit } from '@angular/core';
import { InfobubbleComponent as BaseInfobubbleComponent } from 'projects/awesomeshop/src/app/shared/infobubble/infobubble.component';

@Component({
  selector: 'as-infobubble',
  templateUrl: './infobubble.component.html',
  styleUrls: ['../../../../../awesomeshop/src/app/shared/infobubble/infobubble.component.less'],
})
export class InfobubbleComponent extends BaseInfobubbleComponent implements OnInit {
  public headLine = 'INFO';

  public content = 'CONTENT';

  constructor() {
    super();
  }

  ngOnInit() {}
}
