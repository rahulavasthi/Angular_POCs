import { Component, Input } from '@angular/core';

import { CardComponent }       from './card.component';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.BookName}}</h4>

      {{data.Publisher}}
      {{data.BookPrice}}
    </div>
  `
})
export class HeroJobCardComponent implements CardComponent {
  @Input() data: any;

}