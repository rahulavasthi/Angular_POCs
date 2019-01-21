import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css', '../../../node_modules/angular2-draggable/css/resizable.min.css']
})
export class Dashboard1Component implements OnInit {
  cardList: IBook[];
  constructor(private _bookService: BookService, private _router: Router) { }

  ngOnInit() {
    this.cardList = this._bookService.getBooks();
  }
}
