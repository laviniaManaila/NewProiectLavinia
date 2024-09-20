import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem: any; // Produsul individual din coș
  @Output() removeFromCart = new EventEmitter<any>(); // Emitere eveniment pentru eliminare

}
