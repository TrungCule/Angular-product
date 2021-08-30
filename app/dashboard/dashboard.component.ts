import { Component, OnInit } from '@angular/core';
import{PRODUCTS} from "../../Model/ds-product";
import {ProduceService} from "../../Model/produce.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
products=PRODUCTS;
  constructor(private productService:ProduceService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    this.productService.getProduct()
      .subscribe(Product => this.products = Product.slice(2,4));
  }

}
