import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUSPage } from './about-us.page';

const routes: Routes = [
  {
    path: '',
    component: AboutUSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUSPageRoutingModule {}
