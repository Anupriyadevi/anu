import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerEnquiryPageRoutingModule } from './customer-enquiry-routing.module';

import { CustomerEnquiryPage } from './customer-enquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerEnquiryPageRoutingModule
  ],
  declarations: [CustomerEnquiryPage]
})
export class CustomerEnquiryPageModule {}
