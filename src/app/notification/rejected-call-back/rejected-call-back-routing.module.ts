import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejectedCallBackPage } from './rejected-call-back.page';

const routes: Routes = [
  {
    path: '',
    component: RejectedCallBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectedCallBackPageRoutingModule {}
