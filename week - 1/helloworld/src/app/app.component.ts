/**
 * Title: app.module.ts
 * Author: Laurie Mailloux
 * Date: July 12, 2020
 * Description: App component
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Laurie's world!"
}
