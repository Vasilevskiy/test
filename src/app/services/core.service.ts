import {Injectable} from '@angular/core';

@Injectable()
export class CoreService {

  constructor () {}

  // Добавляем в LocalStorage данные

  addToLocal(data: {products: Array<any>, price: number}): void {
    localStorage.setItem('basket', JSON.stringify(data));
    localStorage.setItem('basketTotal', JSON.stringify(data.products.length));
  }

  // Забираем с LocalStorage данные по ключу

  getFromLocal(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
