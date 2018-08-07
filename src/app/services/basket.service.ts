import {Injectable} from '@angular/core';
import {CoreService} from './core.service';

@Injectable()
export class BasketService {
  public basket = {
    products: [],
    price: null
  };
  public basketTotal = 0;

  constructor(public core: CoreService) {
    if (this.core.getFromLocal('basketTotal')) {
      this.basketTotal = this.core.getFromLocal('basketTotal');
      this.basket = this.core.getFromLocal('basket');
    }
    console.log(this.basket);
  }

  addToBasket(product: any) {
    this.basket.products.push(product);
    this.basket.price += +product.price;
    this.basketTotal = this.basket.products.length;
    this.updateLocalBasket();
    console.log('PRODUCT--', product);
    console.log('BASKET--', this.basket);
    console.log('TOTAL--', this.basketTotal);
  }

  updateLocalBasket() {
    this.core.addToLocal(this.basket);
  }

  deleteFromBasket(id) {
    this.basket.price -= this.basket.products[id].price;
    this.basket.products.splice(id, 1);
    this.basketTotal = this.basket.products.length;
    this.updateLocalBasket();
    console.log(this.basket);
  }

  getBasketTotal() {
    return this.basketTotal;
  }

  getBasket() {
    return this.basket;
  }


}
