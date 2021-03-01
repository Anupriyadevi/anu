import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotleadsPageRoutingModule } from './hotleads-routing.module';

import { HotleadsPage } from './hotleads.page';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotleadsPageRoutingModule
  ],
  providers: [
    CallNumber,
  ],
  declarations: [HotleadsPage]
})
export class HotleadsPageModule {}
