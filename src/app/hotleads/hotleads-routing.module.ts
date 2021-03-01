import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotleadsPage } from './hotleads.page';

const routes: Routes = [
  {
    path: '',
    component: HotleadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotleadsPageRoutingModule {}
