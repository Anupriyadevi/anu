import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistingCustomersPage } from './existing-customers.page';

const routes: Routes = [
  {
    path: '',
    component: ExistingCustomersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistingCustomersPageRoutingModule {}
