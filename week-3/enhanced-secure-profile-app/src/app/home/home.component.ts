/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 22 July 2020
 * Modified By: Laurie Mailloux
 * Description: Home component (Home page)
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: Boolean;

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
