import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class RemoteServiceService {
  baseApiUrl: string = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl).pipe(
      map((data) => {
        return data;
      }),
      tap((res) => console.log(JSON.stringify(res)))
    );
  }
}
