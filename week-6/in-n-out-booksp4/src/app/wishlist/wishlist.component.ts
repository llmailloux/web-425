/**
 * Title: wishlist.component.ts
 * Author: Professor Krasso
 * Modified by: Laurie Mailloux
 * Date: 8/12/2020
 * Description: wishlist component
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem){
    console.log('Inside the wishlist.component.ts (parent) - updateItemsHandler() funciton');
    console.log(item);
    this.items.push(item);
    console.log(this.items);
  }

}
