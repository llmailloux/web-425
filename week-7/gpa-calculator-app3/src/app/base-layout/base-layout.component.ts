/**
 * Title: base-layout.ts
 * Author: Professor Krasso
 * Modified by: Laurie Mailloux
 * Date: 8/12/2020
 * Description: base layout
 */


import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) { 
    this.assignment = 'Assignment 7.2 - Reactive Forms';
  }

  ngOnInit(): void {
  }

  signOut (){
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
