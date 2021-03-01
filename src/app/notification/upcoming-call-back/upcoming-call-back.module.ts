import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingCallBackPageRoutingModule } from './upcoming-call-back-routing.module';

import { UpcomingCallBackPage } from './upcoming-call-back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingCallBackPageRoutingModule
  ],
  declarations: [UpcomingCallBackPage]
})
export class UpcomingCallBackPageModule {}
