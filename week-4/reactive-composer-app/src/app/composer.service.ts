/**
 * Title: composer.service.ts
 * Author: Richard Krasso
 * Date: 22 July 2020
 * Modified By: Laurie Maillouxs
 * Description: composer Service
 */
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
   this.composers = [
       {composerId: 1001, fullName: "Pyortr Llyich Tchaikosky", genre: "Classical"},
       {composerId: 1002, fullName: "Richard Wagner", genre: "Classical"},
       {composerId: 1003, fullName: "Johannes Brahms", genre: "Classical"},
       {composerId: 1004, fullName: "Fran Schubert", genre: "Classical"},
       {composerId: 1005, fullName: "Giuseppe Verdi", genre: "Classical"},
   ]   
  }

getComposers(): Observable<IComposer[]> {
  return of(this.composers);
}

getComposer(composerId: number) {
  for (let  composer of this.composers) {
      if (composer.composerId === composerId) {
          return composer;
      }
  }
}

filterComposers(name: string): Observable<IComposer[]>{
return of(this.composers).pipe(
  map(composers =>
  composers.filter(composer =>
    composer.fullName.toLowerCase().indexOf(name) > -1)))
}
}