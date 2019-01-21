import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { appRouter } from './app.route';
import { BookService } from './dashboard1/book.service';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Dashboard1Component
  ],
  imports: [
    BrowserModule,
    appRouter,
    HttpClientModule,
    FormsModule,
    AngularDraggableModule,
    SortableModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule { }
