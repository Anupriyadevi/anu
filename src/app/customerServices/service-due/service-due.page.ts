import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead.service'
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-service-due',
  templateUrl: './service-due.page.html',
  styleUrls: ['./service-due.page.scss'],
})
export class ServiceDuePage implements OnInit {
  orders: any;
  filteredorders: any;
  constructor(private callNumber: CallNumber, public leadService: LeadService) { }

  ngOnInit() {
    this.leadService.getCustomer().subscribe((res: any) => {
     if (res.success) {
        this.orders = res.data;
        this.orders = this.orders.sort((a, b) => new Date(a.serviceDue).getTime() - new Date(b.serviceDue).getTime());
        this.orders.forEach(element => {
          element.daysleft = new Date(element.serviceDue).getTime() - new Date().getTime();
          element.daysleft = Math.ceil(element.daysleft / (1000 * 3600 * 24));
        });
        this.filteredorders = this.orders;
      }

    });
  }

  launchDialer(n: string) {
    this.callNumber.callNumber(n, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  view(i) {
    this.orders[i].open = true
  }
  viewtoggle(i) {
    this.orders[i].open = false
  }

  focus(option) {
    let frequency;
    let date = new Date();
    // date.setDate(date.getDate() + frequency);
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toISOString();
    if (option == "This Month") {
      frequency = 1;
    } else if (option == "Next 3 Months") {
      frequency = 4;
    }
    if (option == "This year") {
      this.filteredorders = this.orders.filter(order => {
        return order.serviceDue >= firstDay
          && new Date(order.serviceDue).getFullYear() == new Date().getFullYear()
      });
    } else {

      let serviceDue = new Date(date.getFullYear(), date.getMonth() + frequency, 0).toISOString();
      // serviceDue = date.toISOString();
      this.filteredorders = this.orders.filter(order => {
        return order.serviceDue >= firstDay
          && order.serviceDue <= serviceDue
      });
    }


  }


}
