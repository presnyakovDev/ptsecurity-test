export class totalCartPrice {
  constructor(price, rates){
    this.rubles = price * rates.RUB;
    this.euros = price * rates.EUR;
    this.usd = price * rates.USD;
    this.pounds = price * rates.GBP;
    this.yens = price * rates.JPY;
  }
   rubles: number;
   euros: number;
   usd: number;
   pounds: number;
   yens: number;
};
