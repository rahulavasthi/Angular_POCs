import { CardItem } from './card-item';
import { Injectable } from '@angular/core';
import { HeroJobCardComponent }   from './hero-job-card.component';
import { HeroProfileComponent } from '../hero-profile.component';

declare function require(url: string)
@Injectable()
export class CardService {
    cardList: CardItem[];
    bkurl = require("./card-list.json");
    constructor() {
    }

    getCards() {
        this.cardList = [];
        this.bkurl.forEach(element => {
            this.cardList.push(new CardItem(HeroJobCardComponent, element.data));
        });
        return this.cardList;
    }
}