import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TotalCartPrice } from "./totalCartPrice";

const URL = "https://openexchangerates.org/api/latest.json";
const APP_ID = "1673d03aa44943038ed16579d7f6f8a7";
const BASE = "USD";

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  constructor(private http: HttpClient){}

  getConvertedPrices(price:number):Observable<TotalCartPrice>{
    return new Observable(observer => {
      this.http.get(URL, {params: {app_id: APP_ID, base: BASE}})
      .subscribe((data:ApiRespone) => observer.next(new TotalCartPrice(price, data.rates)))
    })
  }
};

class ApiRespone {
  rates:Rates;
};

class Rates{
  RUB:number;
  EUR:number;
  USD:number;
  GBP:number;
  JPY:number;
};
