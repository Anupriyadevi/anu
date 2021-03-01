import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectedCallBackPageRoutingModule } from './rejected-call-back-routing.module';

import { RejectedCallBackPage } from './rejected-call-back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectedCallBackPageRoutingModule
  ],
  declarations: [RejectedCallBackPage]
})
export class RejectedCallBackPageModule {}
