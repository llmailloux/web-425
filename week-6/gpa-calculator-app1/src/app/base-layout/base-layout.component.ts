/**
 * Title: base-layout.ts
 * Author: Professor Krasso
 * Modified by: Laurie Mailloux
 * Date: 8/12/2020
 * Description: base layout
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() { 
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {
  }

}
