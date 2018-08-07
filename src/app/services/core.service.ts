import {Injectable} from '@angular/core';

@Injectable()
export class CoreService {

  constructor () {}

  addToLocal(data) {
    localStorage.setItem('basket', JSON.stringify(data));
    localStorage.setItem('basketTotal', JSON.stringify(data.products.length));
  }

  getFromLocal(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
