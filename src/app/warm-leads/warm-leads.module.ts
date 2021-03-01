import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarmLeadsPageRoutingModule } from './warm-leads-routing.module';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { WarmLeadsPage } from './warm-leads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarmLeadsPageRoutingModule
  ],
  providers: [
    CallNumber,
  ],
  declarations: [WarmLeadsPage]
})
export class WarmLeadsPageModule {}
