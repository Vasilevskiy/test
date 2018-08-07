import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from '../components/home/home.component';
import {RouterModule} from '@angular/router';
import {BasketComponent} from '../components/basket/basket.component';

const routeParams = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'basket', component: BasketComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routeParams),
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {
}
