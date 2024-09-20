import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(
    private http: HttpClient
  ) { }

  // Funcția care obține datele din products.json
  public getProducts(): Observable<any> {
    return this.http.get('/products.json')
  }
  
}
  
