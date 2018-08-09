import { Injectable } from '@angular/core';
const SELECTEDCART = [
   { price: 20 },
   { price: 45 },
   { price: 67 },
   { price: 1305 }
];

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  getTotalCartPrice():number{
    let result = 0;
    SELECTEDCART.forEach((item)=>{
      result += item.price
    })
    return result
  }
}
