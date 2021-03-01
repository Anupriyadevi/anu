import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'privacy-policy',
    loadChildren: () => import('./companyDetails/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./companyDetails/contact-us/contact-us.module').then( m => m.ContactUSPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./companyDetails/about-us/about-us.module').then( m => m.AboutUSPageModule)
  },
  {
    path: 'service-due',
    loadChildren: () => import('./customerServices/service-due/service-due.module').then( m => m.ServiceDuePageModule)
  },
  {
    path: 'service-history',
    loadChildren: () => import('./customerServices/service-history/service-history.module').then( m => m.ServiceHistoryPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'customer-enquiry',
    loadChildren: () => import('./customers/customer-enquiry/customer-enquiry.module').then( m => m.CustomerEnquiryPageModule)
  },
  {
    path: 'existing-customers',
    loadChildren: () => import('./customers/existing-customers/existing-customers.module').then( m => m.ExistingCustomersPageModule)
  },
  {
    path: 'product-purchased',
    loadChildren: () => import('./product/product-purchased/product-purchased.module').then( m => m.ProductPurchasedPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'new-lead',
    loadChildren: () => import('./newLead/new-lead/new-lead.module').then( m => m.NewLeadPageModule)
  },
  {
    path: 'existing-lead',
    loadChildren: () => import('./newLead/existing-lead/existing-lead.module').then( m => m.ExistingLeadPageModule)
  },
  {
    path: 'convert-lead',
    loadChildren: () => import('./newLead/convert-lead/convert-lead.module').then( m => m.ConvertLeadPageModule)
  },
  {
    path: 'create-customer',
    loadChildren: () => import('./newLead/create-customer/create-customer.module').then( m => m.CreateCustomerPageModule)
  },
  {
    path: 'customerdetails',
    loadChildren: () => import('./customers/customerdetails/customerdetails.module').then( m => m.CustomerdetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'call-back-details',
    loadChildren: () => import('./call-back-details/call-back-details.module').then( m => m.CallBackDetailsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'feedback-list',
    loadChildren: () => import('./feedback/feedback-list/feedback-list.module').then( m => m.FeedbackListPageModule)
  },
  {
    path: 'hotleads',
    loadChildren: () => import('./hotleads/hotleads.module').then( m => m.HotleadsPageModule)
  },
  {
    path: 'cold-leads',
    loadChildren: () => import('./cold-leads/cold-leads.module').then( m => m.ColdLeadsPageModule)
  },
  {
    path: 'warm-leads',
    loadChildren: () => import('./warm-leads/warm-leads.module').then( m => m.WarmLeadsPageModule)
  },
  {
    path: 'lost-leads',
    loadChildren: () => import('./lost-leads/lost-leads.module').then( m => m.LostLeadsPageModule)
  }
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
