import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService1 } from './book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poc1',
  templateUrl: './poc1.component.html',
  styleUrls: ['./poc1.component.css', '../../../node_modules/angular2-draggable/css/resizable.min.css']
})
export class Poc1Component implements OnInit {
  cardList: IBook[];
  constructor(private _bookService: BookService1, private _router: Router) { }

  ngOnInit() {
    this.cardList = this._bookService.getBooks();
  }
}
