import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { CardDirective } from './card.directive';
import { CardComponent } from './card.component';
import { CardItem } from './card-item';

@Component({
  selector: 'app-card-template',
  template: `
              <div class="ad-banner">
                <h3>Advertisements</h3>
                <ng-template card-host></ng-template>
              </div>
            `
})
export class CardTemplateComponent implements OnInit, OnDestroy {
  @Input() cardList: CardItem[];
  currentAdIndex = -1;
  @ViewChild(CardDirective) cardHost: CardDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.cardList.length;
    let cardItem = this.cardList[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(cardItem.component);

    let viewContainerRef = this.cardHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<CardComponent>componentRef.instance).data = cardItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
