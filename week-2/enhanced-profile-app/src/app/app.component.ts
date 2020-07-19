/**
 * Title: app.component.ts
 * Author: Laurie Mailloux
 * Date: July 7, 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = "Assignment 2.3 - Data Binding";
}
