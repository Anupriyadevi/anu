import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackPageRoutingModule } from './feedback-routing.module';

import { FeedbackPage } from './feedback.page';
import { IonicRatingModule } from 'ionic4-rating';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FeedbackPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [FeedbackPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeedbackPageModule {}
