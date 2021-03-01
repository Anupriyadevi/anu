import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLeadPage } from './new-lead.page';

const routes: Routes = [
  {
    path: '',
    component: NewLeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLeadPageRoutingModule {}
