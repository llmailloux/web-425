/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Date: 08 August 2020
 * Modified By: Laurie Mailloux
 * Description: Book Interface 
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;  
}