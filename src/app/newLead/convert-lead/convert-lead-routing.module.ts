import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertLeadPage } from './convert-lead.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertLeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertLeadPageRoutingModule {}
