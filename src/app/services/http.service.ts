import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
  private baseUrl = 'http://localhost:3000';
  constructor (private http: HttpClient) {}

  getProducts() {
     return this.http.get(this.baseUrl + '/products');
  }
}
