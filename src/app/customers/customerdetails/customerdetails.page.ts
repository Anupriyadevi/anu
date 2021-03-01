import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeadService } from '../../service/lead.service'
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.page.html',
  styleUrls: ['./customerdetails.page.scss'],
})
export class CustomerdetailsPage implements OnInit {
  id: any;
  customer: any;
  customerProfile: any;
  serviceDue: any;
  constructor(private callNumber: CallNumber, public activeRoute: ActivatedRoute, public leadService: LeadService) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.queryParams.id;
    this.serviceDue = this.activeRoute.snapshot.queryParams.serviceDue;
    this.leadService.getCustomerDetails(this.id).subscribe((res: any) => {
      if (res.success) {
        this.customer = res.data;
        this.customerProfile = this.customer.CustomerProfiles[0];
      }
    });
  }

  launchDialer(n: string) {
    this.callNumber.callNumber(n, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }


}
