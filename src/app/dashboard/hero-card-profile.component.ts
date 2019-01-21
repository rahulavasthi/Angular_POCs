import { Component, Input }  from '@angular/core';

import { CardComponent }       from './card.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.AuthorName}}</h4>

      <p>{{data.PublishDate}}</p>
      <p>{{data.BookCount}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class HeroCardProfileComponent implements CardComponent {
  @Input() data: any;
}


