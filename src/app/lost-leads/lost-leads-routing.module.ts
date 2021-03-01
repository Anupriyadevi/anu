import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LostLeadsPage } from './lost-leads.page';

const routes: Routes = [
  {
    path: '',
    component: LostLeadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LostLeadsPageRoutingModule {}
