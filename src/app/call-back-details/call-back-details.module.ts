import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule ,  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallBackDetailsPageRoutingModule } from './call-back-details-routing.module';

import { CallBackDetailsPage } from './call-back-details.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { IonicTimepickerModule } from  '@logisticinfotech/ionic-timepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Ionic4DatepickerModule,
    IonicTimepickerModule,
    CallBackDetailsPageRoutingModule
  ],
  declarations: [CallBackDetailsPage]
})
export class CallBackDetailsPageModule {}
