import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColdLeadsPageRoutingModule } from './cold-leads-routing.module';

import { ColdLeadsPage } from './cold-leads.page';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColdLeadsPageRoutingModule
  ],
  providers: [
    CallNumber,
  ],
  declarations: [ColdLeadsPage]
})
export class ColdLeadsPageModule {}
