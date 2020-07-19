/**
 * Title: composer-list.component.ts
 * Author: Laurie Mailloux
 * Date: July 19 2020
 * Description: Composer list component; displays a list of composers
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string){
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

    composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Pyotr Llyich Tchaikovsky", "Classical"),
      new Composer("Richard Wagner", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Franz Schubert", "Classical"),
      new Composer("Giuseppe Verdi", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}
