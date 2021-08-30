import { Injectable } from '@angular/core';
import {PRODUCTS} from "./ds-product";
import {Observable, of} from "rxjs";
import {Product} from "./product";
import {MessageService} from "../app/message/message.service";


@Injectable({
  providedIn: 'root'
})
export class ProduceService {
  searchProduct(term: string): any {
      throw new Error('Method not implemented.');
  }

  constructor(private messageService: MessageService) {}

  getProduct(): Observable<Product[]> {
    const Product = of(PRODUCTS);
    this.messageService.add('ProductService: fetched Products');
    return Product;
  }

  getProducts(id: number): Observable<Product> {
    const Product = PRODUCTS.find(p => p.id === id)!;
    this.messageService.add(`ProductService: fetched Product id=${id}`);
    return of(Product);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`ProductService: ${message}`);
  }
}
