import { Component } from '@angular/core';
import { InfobubbleComponent as BaseInfobubbleComponent } from '@lib/shared/infobubble/infobubble.component';

@Component({
  selector: 'as-infobubble',
  templateUrl: './infobubble.component.html',
  styleUrls: [],
})
export class InfobubbleComponent extends BaseInfobubbleComponent {
  public headLine = 'INFO';

  public content = 'CONTENT';
}
