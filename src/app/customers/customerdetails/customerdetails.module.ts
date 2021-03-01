import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerdetailsPageRoutingModule } from './customerdetails-routing.module';

import { CustomerdetailsPage } from './customerdetails.page';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerdetailsPageRoutingModule
  ],
  providers: [
    CallNumber,
  ],
  declarations: [CustomerdetailsPage]
})
export class CustomerdetailsPageModule {}
