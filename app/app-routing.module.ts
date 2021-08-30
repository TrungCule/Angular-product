import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CpProductComponent} from "./cp-product/cp-product.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {path:'cp-product',component:CpProductComponent},
  {path:'detail-product/:id',component:DetailProductComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
