import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LeadService } from '../../service/lead.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.page.html',
  styleUrls: ['./create-customer.page.scss'],
})
export class CreateCustomerPage implements OnInit {
  leadForm: any;
  constructor(private router: Router, private _formBuilder: FormBuilder, public leadService: LeadService,
    ) { }

  ngOnInit() {
    this.leadForm = this._formBuilder.group({
      purchaseOrder: new FormControl(),
      productName: new FormControl(),
      deliveryAddress: new FormControl(),
      quantity: new FormControl(),
      advance: new FormControl(),
      remaining: new FormControl(),
      paymentType: new FormControl(),
      deliveryTypeTime: new FormControl(),
      techLead: new FormControl(),
      serviceReport: new FormControl(),
      customerFeedback: new FormControl(),
    });
  }

  remainingCalc(event) {
    let remaining = parseInt(localStorage.getItem('price')) - parseInt(event.target.value);
    this.leadForm.controls["remaining"].setValue(remaining);

  }

  submit() {
    let id = localStorage.getItem('newLeadId');
    let data = this.leadForm.value;
    data.createdLeadId = id;
    data.createdUserId  = localStorage.getItem('id');
    data.convertedLeadId = localStorage.getItem('convertedLeadId');
    console.log(data);
    this.leadService.customerProfile(data).subscribe((res: any) => {
      if (res.success) {
        // localStorage.setItem("newLeadId", res.data.id);
        this.router.navigate(['/existing-customers']);
      }
    })

    //     alert(data)

    //     var link = this.leadService.API_URL +'/customerProfile'

    //     this.http.post(link, data, {})
    // .then(data => {

    //   alert(data.status);
    //   alert(data.data); // data received by server
    //   alert(data.headers);

    // })
    // .catch(error => {

    //   alert(error.status);
    //   alert(error.error); // error message as string
    //   alert(error.headers);

    // });

  }

}
