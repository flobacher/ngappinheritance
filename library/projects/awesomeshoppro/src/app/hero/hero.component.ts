import { Component } from '@angular/core';
import { HeroComponent as BaseHeroComponent } from '@lib/hero/hero.component';

@Component({
  selector: 'as-hero',
  templateUrl: '../../../../awesomelibrary/src/lib/hero/hero.component.html',
  styleUrls: [],
})
export class HeroComponent extends BaseHeroComponent {}
