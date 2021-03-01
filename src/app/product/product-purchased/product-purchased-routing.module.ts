import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPurchasedPage } from './product-purchased.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPurchasedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPurchasedPageRoutingModule {}
