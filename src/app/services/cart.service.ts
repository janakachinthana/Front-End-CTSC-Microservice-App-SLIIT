import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cart } from '../models/cart.model';

@Injectable()
export class CartService {

  list: Cart[];

  readonly rootURL = "http://20.194.151.243:3000/"

  constructor(private http: HttpClient,) { }

  GetCartInfor() {
    console.log("Inside service");

     this.http.get(this.rootURL + 'cart')
      .toPromise().then(res => {
        this.list = res.data as Cart[];
      });
  }

}
