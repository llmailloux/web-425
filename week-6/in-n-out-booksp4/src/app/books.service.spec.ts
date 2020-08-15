/**
 * Title: books.service.spec.ts
 * Author: Professor Krasso
 * Date: 08 August 2020
 * Modified By: Laurie Mailloux
 * Description: Book Service
 */

import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
