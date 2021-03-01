import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarmLeadsPage } from './warm-leads.page';

const routes: Routes = [
  {
    path: '',
    component: WarmLeadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarmLeadsPageRoutingModule {}
