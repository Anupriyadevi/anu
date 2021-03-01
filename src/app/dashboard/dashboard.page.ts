import { Component, OnInit } from '@angular/core';
import { LeadService } from '../service/lead.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  leadsCount: number = 0;
  customerCount: number = 0;
  // allCallbackCount:number =0;
  allCallbackCount: number = 0;
  completedCallbackCount: number = 0;
  pendingCallBackCount: number = 0;
  feedbackCount: number = 0;
  hotLeadCount: number = 0;
  coldLeadCount: number = 0;
  warmLeadCount: number = 0;
  lostLeadCount: number = 0;
  logRole =localStorage.getItem('logRole');
  UserId :number = parseInt(localStorage.getItem('id'));
  leads;
  constructor(public leadService: LeadService) { }

  ngOnInit() {
    this.leadCount();
    this.customersCount();
    this.pendingCallback();
    this.completedCallbacks();
    this.getFeedbacks();
    this.getHotleads();
    this.getColdleads();
    this.getwarmleads();
    this.getLostleads();

  }

  ionViewWillEnter() {
    this.leadCount();
    this.customersCount();
    this.pendingCallback();
    this.completedCallbacks();
    this.getFeedbacks();
    this.getHotleads();
    this.getColdleads();
    this.getwarmleads();
    this.getLostleads();
   
  }

  leadCount() {
    this.leadService.getLead().subscribe((res: any) => {
      if (res.success) {
        if(this.logRole==='admin'){
        this.leadsCount = res.data.length;
        }
        else{
          this.leads = res.data.filter(data=> data.user_id===this.UserId);
          this.leadsCount = this.leads.length;
          //console.log(this.leads);
        }
      }
    });
  }

  customersCount() {
    this.leadService.getCustomer().subscribe((res: any) => {
      if (res.success) {
        if(this.logRole==='admin'){
          this.customerCount = res.data.length;
          }
          else{
            this.leads= res.data.filter(data=> data.createdUserId===this.UserId);
            this.customerCount = this.leads.length;
            
          }
      }
    });
  }

  pendingCallback() {
    this.leadService.getCalBack().subscribe((res: any) => {
      if (res.success) {
        if(this.logRole==='admin'){
          this.pendingCallBackCount = res.data.length;
          }
          else{
            this.leads= res.data.filter(data=> data.createdUserId===this.UserId);
            this.pendingCallBackCount = this.leads.length;
            
          }
      }
    });
  }

  completedCallbacks() {
    this.leadService.getCalBackcompleted().subscribe((res: any) => {
     if (res.success) {
      if(this.logRole==='admin'){
        this.completedCallbackCount = res.data.length;
        }
        else{
          this.leads= res.data.filter(data=> data.createdUserId===this.UserId);
          this.completedCallbackCount = this.leads.length;
          
        }
        this.allCallbackCount = this.completedCallbackCount + this.pendingCallBackCount;
      }
    });
  }

  getFeedbacks() {
    this.leadService.getFeedbacks().subscribe((res: any) => {
      if (res.success) {
        if(this.logRole==='admin'){
          this.feedbackCount = res.data.length;
          }
          else{
            this.leads= res.data.filter(data=> data.createdUserId===this.UserId);
            this.feedbackCount = this.leads.length;
            
          }
      }
    });
  }
  getHotleads() {
    this.leadService.getHotleads().subscribe((res: any) => {
      if (res.success) {
        if(this.logRole==='admin'){
          this.hotLeadCount = res.data.length;
          }
          else{
            this.leads= res.data.filter(data=> data.UserId===this.UserId);
            this.hotLeadCount = this.leads.length; 
          }
      }
    });
  }
  getColdleads() {
    this.leadService.getColdleads().subscribe((res: any) => {
      if (res.success) {
        if(this.logRole==='admin'){
          this.coldLeadCount = res.data.length;
          }
          else{
            this.leads= res.data.filter(data=> data.UserId===this.UserId);
            this.coldLeadCount = this.leads.length;     
          }
      }
    });
  }
  getwarmleads() {
    this.leadService.getWarmleads().subscribe((res: any) => {
      if (res.success) {
        if(this.logRole==='admin'){
          this.warmLeadCount = res.data.length;
          }
          else{
            this.leads= res.data.filter(data=> data.UserId===this.UserId);
            this.warmLeadCount = this.leads.length;
            
          }
      }
    });
  }
  getLostleads() {
    this.leadService.getLostleads().subscribe((res: any) => {
      if (res.success) {
        if(this.logRole==='admin'){
          this.lostLeadCount = res.data.length;
          }
          else{
            this.leads= res.data.filter(data=> data.UserId===this.UserId);
            this.lostLeadCount = this.leads.length; 
          }
      }
    });
  }
}
