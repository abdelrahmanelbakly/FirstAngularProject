import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BaseUrl: string = "https://fakestoreapi.com/";

  constructor(private http: HttpClient) {
   }

  getAllProducts(limit:number = 5): Observable<any> {
    const productsUrl = `${this.BaseUrl}products?limit=${limit}`
    return this.http.get<ProductRepresentation[]>(productsUrl);
  }
}
