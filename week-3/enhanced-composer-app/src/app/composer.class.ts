/**
 * Title: composer.class.ts
 * Author: Richard Krasso
 * Date: 22 July 2020
 * Modified By: Laurie Mailloux
 * Description: Class file for the Composer object
 */


import { IComposer } from './composer.interface';

export class Composer {

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

getComposers() {
    return this.composers;
}

getComposer(composerId: number) {
    for (let  composer of this.composers) {
        if (composer.composerId === composerId) {
            return composer;
        }
    }
}

}