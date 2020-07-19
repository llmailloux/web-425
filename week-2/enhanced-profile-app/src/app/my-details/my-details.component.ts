/**
 * Title: my-details.component.ts
 * Author: Laurie Mailloux
 * Date: July 19, 2020
 * Description: My details component
 */

import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

export default class Person{

    fullName: string;
    favoriteFood: string;
    favoriteColor: string;
    keywords = [
      "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
    ];

    constructor(fullName: string, favoriteFood: string, favoriteColor: string){
      this.fullName = fullName;
      this.favoriteFood = favoriteFood;
      this.favoriteColor = favoriteColor;
    }  

    toString(){
      console.log(`\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`);
    }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Laurie Mailloux", "Pizza", "all colors");
    this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
