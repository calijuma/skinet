import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ],
  declarations: [ShopComponent, ProductItemComponent, ProductDetailsComponent]
})
export class ShopModule { }
