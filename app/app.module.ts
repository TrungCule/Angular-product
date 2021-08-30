import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpProductComponent } from './cp-product/cp-product.component';
import {FormsModule} from "@angular/forms";
import { DetailProductComponent } from './detail-product/detail-product.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchProductComponent } from './search-product/search-product.component';





@NgModule({
  declarations: [
    AppComponent,
    CpProductComponent,
    DetailProductComponent,
    MessageComponent,
    DashboardComponent,
    SearchProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
