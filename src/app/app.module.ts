import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { HeroJobAdComponent }   from './hero-job-ad.component';
import { AdBannerComponent }    from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective }          from './ad.directive';
import { AdService }            from './ad.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardTemplateComponent } from './dashboard/card-template.component';
import { appRouter } from './app.route';
import { CardService } from './dashboard/card.service';
import { HeroJobCardComponent }   from './dashboard/hero-job-card.component';
import { HeroCardProfileComponent } from './dashboard/hero-card-profile.component';
import { CardDirective } from './dashboard/card.directive';

@NgModule({
  imports: [ BrowserModule, appRouter ],
  providers: [AdService, CardService],
  declarations: [ AppComponent,
                  AdBannerComponent,
                  HeroJobAdComponent,
                  HeroProfileComponent,
                  AdDirective,
                  DashboardComponent,
                  CardTemplateComponent,
                  HeroJobCardComponent,
                  HeroCardProfileComponent,
                  CardDirective ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent, HeroJobCardComponent, HeroCardProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

