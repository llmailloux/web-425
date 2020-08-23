/**
 * Title: app.component.ts
 * Author: Richard Krasso
 * Date: 22 July 2020
 * Modified By: Laurie Maillouxs
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 4.4 Async Pipe';
}
