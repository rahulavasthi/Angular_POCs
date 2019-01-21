import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service';
import { DataEvent, DragDropEvent } from '@progress/kendo-angular-sortable';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css', '../../../node_modules/angular2-draggable/css/resizable.min.css']
})
export class Dashboard2Component implements OnInit {
	cardList: IBook[];
  	constructor(private _bookService: BookService ) {}

  	ngOnInit() {
		this.cardList = this._bookService.getBooks();
	}
}
