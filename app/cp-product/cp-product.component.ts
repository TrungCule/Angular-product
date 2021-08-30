import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from "../../Model/ds-product";
import {ProduceService} from "../../Model/produce.service";

@Component({
  selector: 'app-cp-product',
  templateUrl: './cp-product.component.html',
  styleUrls: ['./cp-product.component.css']
})
export class CpProductComponent implements OnInit {
  products=PRODUCTS;
  constructor(private productService:ProduceService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    this.productService.getProduct()
      .subscribe(Product => this.products = Product);
  }

}
