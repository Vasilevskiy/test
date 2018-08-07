import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RoutingModule} from './modules/routing.module';
import {HomeComponent} from './components/home/home.component';
import {BasketComponent} from './components/basket/basket.component';
import {HttpService} from './services/http.service';
import {CoreService} from './services/core.service';
import {BasketService} from './services/basket.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, CoreService, BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
