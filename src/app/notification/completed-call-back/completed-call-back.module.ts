import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedCallBackPageRoutingModule } from './completed-call-back-routing.module';

import { CompletedCallBackPage } from './completed-call-back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedCallBackPageRoutingModule
  ],
  declarations: [CompletedCallBackPage]
})
export class CompletedCallBackPageModule {}
