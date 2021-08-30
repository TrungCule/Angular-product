import { Component, OnInit } from '@angular/core';
import {Product} from "../../Model/product";
import {Observable, Subject} from "rxjs";
import {ProduceService} from "../../Model/produce.service";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  product$!: Observable<Product[]>;
  private searchTerms = new Subject<string>();

  constructor(private productService:ProduceService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // @ts-ignore
    this.product$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.productService.searchProduct(term)),
    );
  }

}
