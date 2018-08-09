import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products = [];
  public chosenItem = {};


  constructor(private http: HttpService, private basket: BasketService) {}

  // При инициализации компонента получаем с сервера наши товары.


  ngOnInit() {
    this.http.getProducts().subscribe((res: any) => this.products = res);
  }

  // Добавляем продукт в корзину

  addProduct(product): void {
    this.chosenItem = product;
    this.basket.addToBasket(this.chosenItem);
  }
}
