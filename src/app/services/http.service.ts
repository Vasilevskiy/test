import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {
  private baseUrl = 'http://localhost:3000';
  constructor (private http: HttpClient) {}

  // Возвращаем обьект Observable для подписки на стрим в нашем компоненте

  getProducts(): Observable<any> {
     return this.http.get(this.baseUrl + '/products');
  }
}
