import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ShopModule } from '../shop/shop.module';
import { ShopComponent } from '../shop/shop.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
