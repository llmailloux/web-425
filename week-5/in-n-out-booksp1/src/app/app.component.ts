/**
 * Title: contact.component.ts
 * Author: Professor Krasso
 * Date: 08 August 2020
 * Modified by: Laurie Mailloux
 * Description: Contact component (contact page)
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.2 - Navigation and Layout'
  }
 
}
