import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDuePageRoutingModule } from './service-due-routing.module';

import { ServiceDuePage } from './service-due.page';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceDuePageRoutingModule
  ],
  providers: [
    CallNumber,
  ],
  declarations: [ServiceDuePage]
})
export class ServiceDuePageModule {}
