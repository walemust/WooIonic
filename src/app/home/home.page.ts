import { Component } from '@angular/core';
import { Product } from '../product';

//import * as WC from 'woocommerce-api';
import { RemoteServiceService } from './../remote-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  WooCommerce: any;
  products: Product[] = [];

  public image: string =
    'https://media.premiumtimesng.com/wp-content/files/2022/02/Dbanj.jpg';
  constructor(private remoteService: RemoteServiceService) {
    this.remoteService.getAllProducts();
  }

  ngOnInit(): void {
    this.remoteService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
