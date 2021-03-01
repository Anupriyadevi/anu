import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistingCustomersPageRoutingModule } from './existing-customers-routing.module';

import { ExistingCustomersPage } from './existing-customers.page';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistingCustomersPageRoutingModule
  ],
  providers: [
    CallNumber,
  ],
  declarations: [ExistingCustomersPage]
})
export class ExistingCustomersPageModule {}
