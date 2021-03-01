import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackListPageRoutingModule } from './feedback-list-routing.module';

import { FeedbackListPage } from './feedback-list.page';
import { IonicRatingModule } from 'ionic4-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackListPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [FeedbackListPage]
})
export class FeedbackListPageModule {}
