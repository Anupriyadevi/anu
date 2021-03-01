import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LostLeadsPageRoutingModule } from './lost-leads-routing.module';

import { LostLeadsPage } from './lost-leads.page';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LostLeadsPageRoutingModule
  ],
  providers: [
    CallNumber,
  ],
  declarations: [LostLeadsPage]
})
export class LostLeadsPageModule {}
