import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistingLeadPage } from './existing-lead.page';

const routes: Routes = [
  {
    path: '',
    component: ExistingLeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistingLeadPageRoutingModule {}
