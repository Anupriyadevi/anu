import { Component, OnInit } from '@angular/core';
import {LeadService} from '../../service/lead.service'
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-existing-customers',
  templateUrl: './existing-customers.page.html',
  styleUrls: ['./existing-customers.page.scss'],
})
export class ExistingCustomersPage implements OnInit {
  customers: any;
  customersBackup: any;
  count=0;
  userid= parseInt(localStorage.getItem('id'));
  logRole = localStorage.getItem('logRole');
  constructor(private callNumber: CallNumber, public leadService: LeadService) { }

  ngOnInit() {
    this.leadService.getCustomer().subscribe((res: any) => {
      if (res.success) {
        if(this.logRole === 'admin'){
        this.customers = res.data;
        this.count = this.customers.length;
        }
        else{
          this.customers = res.data.filter(data => data.createdUserId === this.userid);
          this.count = this.customers.length;
        }
        this.customersBackup = this.customers;
      }
    });
  }

  async filterList(evt) {
    this.customers = this.customersBackup;
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.customers = this.customers.filter(currentLead => {
      if (currentLead.customerName && searchTerm) {
        return (currentLead.customerName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || currentLead?.mobileNo?.indexOf(searchTerm.toLowerCase()) > -1 ||  currentLead?.city?.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  ionViewWillEnter (){
    this.ngOnInit();
  }

  launchDialer(n:string){
    this.callNumber.callNumber(n, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
}

  view(i) {
    this.customers[i].open = true
  }
  viewtoggle(i) {
    this.customers[i].open = false
  }

}
