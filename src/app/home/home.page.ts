import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public image: string =
    'https://media.premiumtimesng.com/wp-content/files/2022/02/Dbanj.jpg';
  constructor() {}
}
