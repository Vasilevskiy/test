import {Component, OnInit} from '@angular/core';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{
  title = 'basket';
  itemsBasket = {
    products: [],
    price: null
  };
  constructor(private basket: BasketService) {}

  ngOnInit () {
    this.itemsBasket = this.basket.getBasket();
    console.log(this.itemsBasket);
  }

  deleteItem(productId) {
    // console.log(productId);
    this.basket.deleteFromBasket(productId);
  }
}
