/**
 * Title: gpa.components.ts
 * Author: Professor Krasso
 * Modified by: Laurie Mailloux
 * Date: 8/12/2020
 * Description: gpa components
 */


import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}