import {Component, DoCheck, OnInit} from '@angular/core';
import {BasketService} from './services/basket.service';
import {CoreService} from './services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'app';
  public basketCount = 0;

  constructor(private basket: BasketService, private core: CoreService) {}
  ngOnInit() {
    if (this.core.getFromLocal('basketTotal')) {
      this.basketCount = this.core.getFromLocal('basketTotal');
    }
  }
  ngDoCheck() {
    this.basketCount = this.basket.getBasketTotal();
  }

}
