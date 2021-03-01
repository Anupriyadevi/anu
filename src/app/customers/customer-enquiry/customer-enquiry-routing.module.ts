import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerEnquiryPage } from './customer-enquiry.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerEnquiryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerEnquiryPageRoutingModule {}
