import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'add-product', component: NewproductComponent},
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
