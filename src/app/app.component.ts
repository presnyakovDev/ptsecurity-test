import { Component } from '@angular/core';
import { CurrencyConverterService } from "./currency-converter.service";
import { CartService } from "./cart.service";
import { TotalCartPrice } from "./totalCartPrice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrencyConverterService, CartService]
})
export class AppComponent {

  selectedCart:TotalCartPrice;

  constructor(private currencyConverterService: CurrencyConverterService, private cartService: CartService ) {}

  ngOnInit() {
    this.currencyConverterService.getConvertedPrices(this.cartService.getTotalCartPrice())
    .subscribe((value: TotalCartPrice) => this.selectedCart = value)
  }
}
