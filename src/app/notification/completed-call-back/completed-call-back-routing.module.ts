import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedCallBackPage } from './completed-call-back.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedCallBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedCallBackPageRoutingModule {}
