import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingCallBackPage } from './upcoming-call-back.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingCallBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingCallBackPageRoutingModule {}
