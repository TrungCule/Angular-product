import { Component, OnInit } from '@angular/core';
import {Product} from "../../Model/product";
import {ActivatedRoute} from "@angular/router";
import  {ProduceService} from "../../Model/produce.service";
import {Location} from "@angular/common";


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private productService : ProduceService,
               private location: Location) { }

  product:Product | undefined;
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts(id)
      .subscribe(Product => this.product= Product);
  }
  goBack(){
    this.location.back();
  }
}
