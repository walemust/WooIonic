import { Component } from '@angular/core';

//import * as WC from 'woocommerce-api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  WooCommerce: any;
  product: any[];

  public image: string =
    'https://media.premiumtimesng.com/wp-content/files/2022/02/Dbanj.jpg';
  constructor() {
    this.WooCommerce = WC({
      url: 'https://fakestoreapi.com/products',
    });

    this.WooCommerce
  }
}
