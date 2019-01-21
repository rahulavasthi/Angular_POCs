import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgDragDropModule } from 'ng-drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { AngularDraggableModule } from 'angular2-draggable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { BookService } from './dashboard2/book.service';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import {Poc1Component} from './poc1/poc1.component';
import { BookService1 } from './poc1/book.service';
import { HomeComponent } from './home/home.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    Dashboard2Component,
    Dashboard3Component,
    Poc1Component,
    HomeComponent,
    Sidebar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDragDropModule.forRoot(),
    FormsModule,
    SortableModule,
    AngularDraggableModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot()
  ],
  providers: [BookService, BookService1],
  bootstrap: [AppComponent]
})
export class AppModule { }
