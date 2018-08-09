import {Component, OnInit} from '@angular/core';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  itemsBasket = {
    products: [],
    price: 0
  };
  constructor(private basket: BasketService) {}

  // При инициализации компонента мы достаем корзину с продуктами

  ngOnInit () {
    this.itemsBasket = this.basket.getBasket();
  }

  // Удаление продукта из корзины

  deleteItem(productId: number): void {
    this.basket.deleteFromBasket(productId);
  }
}
