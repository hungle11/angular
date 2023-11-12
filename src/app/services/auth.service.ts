import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAccount } from '../interfaces/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = "http://localhost:3000/account"
  constructor(private http: HttpClient) { }
  getAll(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(this.API_URL)
  }
  addAccount(account: IAccount): Observable<IAccount> {
    return this.http.post<IAccount>(`${this.API_URL}`, account)
  }
  removeProduct(id: string): Observable<{ message: string, data: IAccount }> {
    return this.http.delete<{ message: string, data: IAccount }>(`${this.API_URL}/${id}`)
  }
  getAccountById(id: number | string): Observable<IAccount> {
    return this.http.get<IAccount>(`${this.API_URL}/${id}`)
  }
  updateAcount(product: IAccount): Observable<IAccount> {
    return this.http.put<IAccount>(`${this.API_URL}/${product.id}`, product)
  }

}
