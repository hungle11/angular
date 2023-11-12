import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = "http://localhost:3000/products"
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL)
  }
  getProductById(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}`, product)
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/${product.id}`, product)
  }
  removeProduct(id: string): Observable<{ message: string, data: IProduct }> {
    return this.http.delete<{ message: string, data: IProduct }>(`${this.API_URL}/${id}`)
  }
}
