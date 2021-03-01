import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationPage } from './notification.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationPage,
    children: [
      {
        path: 'upcoming',
        children: [
          {
            path: '',
            loadChildren: () => import('./upcoming-call-back/upcoming-call-back.module').then( m => m.UpcomingCallBackPageModule)
          }
        ]
      },
      {
        path: 'completed',
        children: [
          {
            path: '',
            loadChildren: () => import('./completed-call-back/completed-call-back.module').then( m => m.CompletedCallBackPageModule)
          }
        ]
      },
      {
        path: 'rejected',
        children: [
          {
            path: '',
            loadChildren: () => import('./rejected-call-back/rejected-call-back.module').then( m => m.RejectedCallBackPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/notification/upcoming',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'completed-call-back',
    loadChildren: () => import('./completed-call-back/completed-call-back.module').then( m => m.CompletedCallBackPageModule)
  },
  {
    path: 'rejected-call-back',
    loadChildren: () => import('./rejected-call-back/rejected-call-back.module').then( m => m.RejectedCallBackPageModule)
  },
  {
    path: 'upcoming-call-back',
    loadChildren: () => import('./upcoming-call-back/upcoming-call-back.module').then( m => m.UpcomingCallBackPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationPageRoutingModule {}
