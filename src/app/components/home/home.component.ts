import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {BasketService} from '../../services/basket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';
  public products = [];

  constructor(private http: HttpService, private basket: BasketService) {}
  ngOnInit() {
    this.http.getProducts().subscribe((res: any) => res.map( val => {
      this.products.push(val);
    }));
    console.log(this.products);
  }

  addProduct(product) {
    this.basket.addToBasket(product);
  }


}
