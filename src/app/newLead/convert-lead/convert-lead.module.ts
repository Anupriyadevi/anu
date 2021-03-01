import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule ,  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertLeadPageRoutingModule } from './convert-lead-routing.module';

import { ConvertLeadPage } from './convert-lead.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { IonicTimepickerModule } from  '@logisticinfotech/ionic-timepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertLeadPageRoutingModule,
    ReactiveFormsModule,
    Ionic4DatepickerModule,
    IonicTimepickerModule,
  ],
  declarations: [ConvertLeadPage]
})
export class ConvertLeadPageModule {}
