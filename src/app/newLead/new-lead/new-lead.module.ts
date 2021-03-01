import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule ,  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLeadPageRoutingModule } from './new-lead-routing.module';

import { NewLeadPage } from './new-lead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLeadPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewLeadPage]
})
export class NewLeadPageModule {}
