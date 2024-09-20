import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  @Input() product: any; 
  @Output() addToCart = new EventEmitter<any>(); 

  
  onAddToCart() {
    this.addToCart.emit(this.product); 
  }
}