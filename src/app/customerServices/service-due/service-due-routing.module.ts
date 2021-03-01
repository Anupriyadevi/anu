import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceDuePage } from './service-due.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceDuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceDuePageRoutingModule {}
