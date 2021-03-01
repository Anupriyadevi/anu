import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPurchasedPageRoutingModule } from './product-purchased-routing.module';

import { ProductPurchasedPage } from './product-purchased.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPurchasedPageRoutingModule
  ],
  declarations: [ProductPurchasedPage]
})
export class ProductPurchasedPageModule {}
