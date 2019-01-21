import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { CardItem } from './card-item';


@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  template: `
    <div>
      <app-card-template [cardList]="cardList"></app-card-template>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  cardList: CardItem[];
  
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardList = this.cardService.getCards();
  }
}