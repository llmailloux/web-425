/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Date: 08 August 2020
 * Modified by: Laurie Mailloux
 * Description: Book interface object
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;  
}