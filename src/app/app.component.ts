import { Component } from '@angular/core';
import { CurrencyConverterService } from "./currency-converter.service";
import { CartService } from "./cart.service";
import { totalCartPrice } from "./totalCartPrice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrencyConverterService, CartService]
})
export class AppComponent {

  selectedCart:totalCartPrice;

  constructor(private currencyConverterService: CurrencyConverterService, private cartService: CartService ) {}

  ngOnInit() {
    this.currencyConverterService.getConvertedPrices(this.cartService.getTotalCartPrice())
    .subscribe((value: totalCartPrice) => this.selectedCart = value)
  }
}
