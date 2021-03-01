import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColdLeadsPage } from './cold-leads.page';

const routes: Routes = [
  {
    path: '',
    component: ColdLeadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColdLeadsPageRoutingModule {}
