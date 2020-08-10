/**
 * Title: books.service.ts
 * Author: Professor Krasso
 * Date: 08 August 2020
 * Modified By: Laurie Mailloux
 * Description: Books Service 
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() { 
    this.books = [
      {
        isbn: `0385755910`,
        title: `All The Bright Places`,
        description: "Finch met Violet on the ledge of the bell tower at school – six stories above the ground – it’s unclear who saves whom.",
        numOfPages: 416,
        authors: [`Jennifer Niven`]
        },
        {
        isbn: `0385755953`,
        title: `Holding up the Universe`,
        description: "If a genie popped out of my bedside lamp, I would wish for these three things: my mom to be alive, nothing bad or sad to ever happen again, and to be a member of the Martin Van Buren High School Damsels",
        numOfPages: 416,
        authors: [`Jennifer Niven`]
        },
        {
        isbn: `0253207770`,
        title: `The Complete Poetical Works of James Whitcomb Riley`,
        description: "Few lives have lets so vivid an impression upon a native environment as that of James Whitecomb Riley, the Hoosier Poet.",
        numOfPages: 920,
        authors: [`James Whitcomb Riley`]
        },
        {
        isbn: `9780141439518`,
        title: `Pride and Prejudice`,
        description: "Few have failed to be charmed by the witty and independent spirt of Elizabeth Bennet.",
        numOfPages: 480,
        authors: [`Jane Austen`]
        },
        {
        isbn: `1980760071`,
        title: `Hamlet`,
        description: "The ghost of the King of Denmark tells his son Hamlet the avenge his murder by killing the new king, Hamlet’s uncle.",
        numOfPages: 124,
        authors: [`William Shakespeare`]
        },
        
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of (this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      } 
    }
  }
}
