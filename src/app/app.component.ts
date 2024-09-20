
import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './services/product.service';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FooterComponent, ProductComponent, CartComponent,]  // Importă FooterComponent aici
  
})
export class AppComponent {
  products: any[] = []; 
  cart: any[] = []; 
  cartItems: (ProductService & {quantity: number})[] = []; // Lista produselor din coș
  
  constructor (
    private productService: ProductService
  ) {

  }

  ngOnInit(): void {
    this.getProducts(); 
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data
    });
  }


onAddProductToCart(product: any) {
  const existingProduct = this.cartItems.find(item => item === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1; // Dacă produsul este deja în coș, creștem cantitatea
  } else {
    this.cartItems.push({ ...product, quantity: 1 }); // Dacă este un produs nou, îl adăugăm cu cantitate 1
  }

  console.log('Produs adăugat în coș:', product);
}
}
