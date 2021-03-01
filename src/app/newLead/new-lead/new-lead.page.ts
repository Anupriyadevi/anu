import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LeadService } from '../../service/lead.service'
import { ActivatedRoute, Router } from '@angular/router';
import csc from 'country-state-city'
//import { element } from 'protractor';

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.page.html',
  styleUrls: ['./new-lead.page.scss'],
})
export class NewLeadPage implements OnInit {
  leadForm: any;
  leads: any;
  leadId: any;
 
  constructor(private router: Router, public activeRoute: ActivatedRoute, private _formBuilder: FormBuilder, public leadService: LeadService) { }
  
  // A jQuery event (I think), which is triggered after "onbeforeunload"
  
  
  countries;
  states;
  cities;
  ngOnInit() {
    this.countries = csc.getAllCountries();
    // this.states = csc.getAllStates();
    // this.cities = csc.getAllCities();
    this.leadForm = this._formBuilder.group({
      customerName: new FormControl('', Validators.required),
      companyName: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      pincode: new FormControl(),
      gstIn: new FormControl(),
      mobileNo: new FormControl('', Validators.required),
      mobileNo2: new FormControl(),
      source: new FormControl(),
      mailId: new FormControl(),
      mailId2: new FormControl(),
      // breakingSizeVariety: new FormControl(),
      type: new FormControl(),
      // backhoeLoader: new FormControl(),
      purpose: new FormControl(),
      product: new FormControl(),
      machineMakeModel: new FormControl(),
      year: new FormControl(),
      machineWorkingHours: new FormControl(),
      existingBreaker: new FormControl(),
      pipelines: new FormControl(),
      leadAssigned: new FormControl('',Validators.required),
      leadAssignedTo: new FormControl('',Validators.required),
      convertedStatus: new FormControl(),
      customerStatus: new FormControl('',Validators.required),
      recommendedBreaker: new FormControl(),
     
    });
    this.leadId = this.activeRoute.snapshot.queryParams.lead;
    console.log('ID : '+this.leadId);
    if (this.leadId) {
      
      this.leadService.getSingleLead(this.leadId).subscribe((res: any) => {
        if (res.success) {
          this.leads = res.data[0];
          this.leadForm.controls["customerName"].setValue(this.leads.customerName);
          this.leadForm.controls["companyName"].setValue(this.leads.companyName);
          this.leadForm.controls["address"].setValue(this.leads.address);
          this.leadForm.controls["city"].setValue(this.leads.city);
          this.leadForm.controls["state"].setValue(this.leads.state);
          this.leadForm.controls["country"].setValue(this.leads.country);
          this.leadForm.controls["pincode"].setValue(this.leads.pincode);
          this.leadForm.controls["gstIn"].setValue(this.leads.gstIn);
          this.leadForm.controls["mobileNo"].setValue(this.leads.mobileNo);
          this.leadForm.controls["mobileNo2"].setValue(this.leads.mobileNo2);
          this.leadForm.controls["mailId"].setValue(this.leads.mailId);
          this.leadForm.controls["mailId2"].setValue(this.leads.mailId2);
          this.leadForm.controls["source"].setValue(this.leads.source);
          // this.leadForm.controls["breakingSizeVariety"].setValue(this.leads.breakingSizeVariety);
          this.leadForm.controls["type"].setValue(this.leads.type);
          this.leadForm.controls["product"].setValue(this.leads.product);
          this.leadForm.controls["purpose"].setValue(this.leads.purpose);
          this.leadForm.controls["machineMakeModel"].setValue(this.leads.machineMakeModel);
          this.leadForm.controls["year"].setValue(this.leads.year);
          this.leadForm.controls["existingBreaker"].setValue(this.leads.existingBreaker);
          this.leadForm.controls["pipelines"].setValue(this.leads.pipelines);
          this.leadForm.controls["leadAssigned"].setValue(this.leads.leadAssigned);
          this.leadForm.controls["leadAssignedTo"].setValue(this.leads.leadAssignedTo);
          this.leadForm.controls["convertedStatus"].setValue(this.leads.convertedStatus);
          this.leadForm.controls["recommendedBreaker"].setValue(this.leads.recommendedBreaker);
          this.leadForm.controls["customerStatus"].setValue(this.leads.customerStatus);
          this.leadForm.controls["machineWorkingHours"].setValue(this.leads.machineWorkingHours);
        }
      });
    }
  }


  getState(code) {
    let countrycode = this.countries.find((element) =>{
      return element.name == code.target.value
    }) ;
   this.states =csc.getStatesOfCountry(countrycode.isoCode)
    console.log(code);
  }
  
  getcity(code) {
    let stateCode = this.states.find((element) =>{
      return element.name == code.target.value
    }) ;
   this.cities =csc.getCitiesOfState(stateCode.countryCode, stateCode.isoCode);
    console.log(code);
  }

  submit(data) {
    let createLeadData = this.leadForm.value;
    createLeadData.UserId = localStorage.getItem('id');
    console.log(JSON.stringify(this.leadForm.value));
    if (this.leads?.id) {
      this.leadService.updateLead(this.leads.id, createLeadData).subscribe((res: any) => {
        if (res.success) {
          localStorage.setItem("existingLead", this.leads.id);
          localStorage.setItem("newLeadId", this.leads.id);
          if (data == 'lead') {
            this.router.navigate(['/existing-lead']);
          }
        }
      });
    } else {
      //this.leadForm.createdPersonId =localStorage.getItem('id');
     
      this.leadService.addLead(createLeadData).subscribe((res: any) => {
        if (res.success) {
          localStorage.setItem("newLeadId", res.data.id);
          if (data == 'lead') {
            this.router.navigate(['/existing-lead']);
          }
        }
      });
    }


  }

  setBreaker(event) {
    if (event.target.value == "Hyundai R 110" || event.target.value == "Hyundai R 140" || event.target.value == "Tatahitachi EX 110" || event.target.value == "Tatahitachi EX 140"
      || event.target.value == "Tatahitachi EX 130" || event.target.value == "Zaxies ZX 140" || event.target.value == "Kobelco SK 140" || event.target.value == "Komatsu PC 130") {
      // this.leadForm.controls["recommendedBreaker"].value = "500S";
      this.leadForm.controls["recommendedBreaker"].setValue('500S');
    } else if (event.target.value == 'JCB') {
      this.leadForm.controls["recommendedBreaker"].setValue('435S');
    } else if (event.target.value == 'CAT') {
      this.leadForm.controls["recommendedBreaker"].setValue('450S');
    } else {
      this.leadForm.controls["recommendedBreaker"].setValue('810HS');
    }
  }

ionViewWillEnter()
{
  this.ngOnInit();
}
}
