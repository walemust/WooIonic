import { Component, ViewChild } from '@angular/core';
import { Product } from '../product';
import { IonSlides } from '@ionic/angular';

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

  productSlides!: {
    initialSlide: 0;
    slidesPerView: 1;
    autoplay: true;
  };

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

  // ionViewDidLoad() {
  //   setInterval(async () => {
  //     if (
  //       (await this.productSlides.getActiveIndex()) ==
  //       (await this.productSlides.length()) - 1
  //     )
  //       this.productSlides.slideTo(0);

  //     this.productSlides.slideNext();
  //   }, 3000);
  // }
}
