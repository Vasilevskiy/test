import {Injectable} from '@angular/core';
import {CoreService} from './core.service';

interface Product {
  id: number;
  imgUrl: string;
  name: string;
  price: string;
  sale: boolean;
  qty: number;
}

@Injectable()
export class BasketService {
  public basket = {
    products: [],
    price: 0
  };
  public basketTotal = 0;

  // Подтягиваем с LocalStorage данные, если в нем что то есть

  constructor(public core: CoreService) {
    if (this.core.getFromLocal('basketTotal')) {
      this.basketTotal = this.core.getFromLocal('basketTotal');
      this.basket = this.core.getFromLocal('basket');
    }
  }
 // Проверяем на наличие подобных элементов в массиве
  basketSearch(product: Product): boolean {
    let bool = false;
    this.basket.products.forEach((item: any) => {
      if (product.id === item.id && !product.sale) {
        item.qty++;
        bool = true;
      } else if (product.id === item.id && product.sale) {
        item.qty += 3;
        bool = true;
      }
    });
    return bool;
  }

  // Добавляем элемент в корзину

  addToBasket(product: Product): void {
    const searchResult = this.basketSearch(product);
    if (!searchResult) {
      this.basket.products.push(product);
    }
    this.basket.price += +product.price;
    this.basketTotal = this.basket.products.length;
    this.updateLocalBasket();
  }

  // Обновляем нашу корзину в LocalStorage

  updateLocalBasket(): void {
    this.core.addToLocal(this.basket);
  }

  // Удаляем элемент из корзины и обновляем LocalStorage

  deleteFromBasket(id: number): void {
    if (this.basket.products[id].sale) {
      this.basket.price -= (this.basket.products[id].price / 3) * this.basket.products[id].qty;
    } else {
      this.basket.price -= this.basket.products[id].price * this.basket.products[id].qty;
    }
    this.basket.products.splice(id, 1);
    this.basketTotal = this.basket.products.length;
    this.updateLocalBasket();
  }

  // Возвращаем кол-во элементов в корзине

  getBasketTotal(): number {
    return this.basketTotal;
  }

  // Возвращаем нашу корзину

  getBasket(): {products: Array<any>, price: number} {
    return this.basket;
  }
}
