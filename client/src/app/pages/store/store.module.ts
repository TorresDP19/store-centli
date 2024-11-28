import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './store.filter.pipe';
import { CartComponent } from './cart/cart.component';
import { InvoiceComponent } from './cart/invoice/invoice.component';

@NgModule({
  declarations: [
    StoreComponent, 
    NewproductComponent, 
    ProductComponent,
    ProductFilterPipe,
    CartComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers: [
    CurrencyPipe
  ]
})
export class StoreModule { }
