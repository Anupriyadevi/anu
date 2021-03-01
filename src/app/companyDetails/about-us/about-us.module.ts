import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutUSPageRoutingModule } from './about-us-routing.module';

import { AboutUSPage } from './about-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutUSPageRoutingModule
  ],
  declarations: [AboutUSPage]
})
export class AboutUSPageModule {}
