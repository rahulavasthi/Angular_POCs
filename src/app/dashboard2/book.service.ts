import { IBook } from './book';
import { Injectable } from '@angular/core';

declare function require(url: string)
@Injectable()
export class BookService {
    bkurl = require("./books.json");
    constructor() {
    }

    getBooks() {
        return this.bkurl
    }
}

