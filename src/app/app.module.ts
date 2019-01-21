import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Poc1Component } from './poc1/poc1.component';
import { appRouter } from './app.route';
import { BookService } from './poc1/book.service';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { AngularDraggableModule } from 'angular2-draggable';
import { Poc2Component } from './poc2/poc2.component';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Poc1Component,
    Poc2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    appRouter,
    HttpClientModule,
    AngularDraggableModule,
    SortableModule,
    SlideMenuModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule { }
