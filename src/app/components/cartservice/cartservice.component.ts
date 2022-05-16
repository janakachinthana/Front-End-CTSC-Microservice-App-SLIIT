import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cartservice',
  templateUrl: './cartservice.component.html',
  styleUrls: ['./cartservice.component.css'],
  viewProviders: [CartService],
})
export class CartserviceComponent implements OnInit {

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this._cartService.GetCartInfor();
  }

}
