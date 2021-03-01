import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LeadService } from '../../service/lead.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-convert-lead',
  templateUrl: './convert-lead.page.html',
  styleUrls: ['./convert-lead.page.scss'],
})
export class ConvertLeadPage implements OnInit {
  dateCheck: boolean = false;
  leadForm: any;
  leads: any;
  convertedLeadId: any;
  leadId: any;
  callBackdate;
  minDate: string = new Date().toISOString();
  datetimeValue = new Date();
  myDate = new Date();
  disabledDates: Date[] = [
    // new Date(1545911005644),     
    // new Date(),     
    // new Date(2018, 12, 12), // Months are 0-based, this is August, 10th.     
    // new Date('Wednesday, December 26, 2018'), // Works with any valid Date formats like long format     
    // new Date('12-14-2018'), // Short format
  ];
  datePickerObj: any = {
    inputDate: new Date(), // default new Date()
    fromDate: new Date(), // default null
    toDate: new Date('2100-12-31'), // default null
    showTodayButton: true, // default true
    closeOnSelect: true, // default false
    disableWeekDays: [], // default []
    mondayFirst: true, // default false
    setLabel: 'Select',  // default 'Set'
    todayLabel: 'Today', // default 'Today'
    closeLabel: 'Close ', // default 'Close'
    disabledDates: this.disabledDates, // default []
    titleLabel: 'Select a Date', // default null
    monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    weeksList: ["S", "M", "T", "W", "T", "F", "S"],
    dateFormat: 'YYYY-MM-DD', // default DD MMM YYYY
    clearButton: false, // default true
    momentLocale: 'pt-BR', // Default 'en-US'
    yearInAscending: true, // Default false
    btnCloseSetInReverse: true, // Default false
    btnProperties: {
      expand: 'block', // Default 'block'
      fill: '', // Default 'solid'
      size: '', // Default 'default'
      disabled: '', // Default false
      strong: '', // Default false
      color: '' // Default ''
    },
    arrowNextPrev: {
      nextArrowSrc: 'assets/images/arrow_right.svg',
      prevArrowSrc: 'assets/images/arrow_left.svg'
    }, // This object supports only SVG files.
    highlightedDates: [
      { date: new Date('2019-09-10'), color: '#ee88bf', fontColor: '#fff' },
      { date: new Date('2019-09-12'), color: '#50f2b1', fontColor: '#fff' }
    ], // Default [],
    isSundayHighlighted: {
      fontColor: '#ee88bf' // Default null
    } // Default {}
  };

  selectedDate;

  myTime = '12:00';
  // (please assign time with proper format which is describe below)
  timePickerObj = {
    inputTime: '', // for 12 hour time in timePicker
    timeFormat: 'HH:mm', // default 'hh:mm A'
    setLabel: 'Set', // default 'Set'
    closeLabel: 'Close', // default 'Close'
    titleLabel: 'Select a Time', // default 'Time'
    clearButton: false, // default true
    btnCloseSetInReverse: true, // default false
    momentLocale: 'pt-BR', //  default 'en-US'

    btnProperties: {
      expand: '', // "block" | "full" (deafault 'block')
      fill: '', // "clear" | "default" | "outline" | "solid" 
      // (deafault 'solid')
      size: '', // "default" | "large" | "small" (deafault 'default')
      disabled: '', // boolean (default false)
      strong: '', // boolean (default false)
      color: ''
      // "primary", "secondary", "tertiary", "success", 
      // "warning", "danger", "light", "medium", "dark" , 
      // and give color in string (default 'primary')
    }
  };
  constructor(private router: Router, public activeRoute: ActivatedRoute, private _formBuilder: FormBuilder, public leadService: LeadService) { }

  ngOnInit() {
    this.leadForm = this._formBuilder.group({
      price: new FormControl(),
      warranty: new FormControl(),
      serviceFrequency: new FormControl("", Validators.required),
      followUpTask: new FormControl(),
      result: new FormControl(),
      quoteOrInvoice: new FormControl(),
      callBack: new FormControl(),
      callBackDate: new FormControl(),
      callBackTime: new FormControl(),
      callStatus: new FormControl(),



    });
    this.leadId = this.activeRoute.snapshot.queryParams.lead;
    if (this.leadId) {
      this.leadService.getSingleConvertedLead(this.leadId).subscribe((res: any) => {
        if (res.success) {
          if (res.data.length > 0) {
            this.leads = res.data[0];
            this.convertedLeadId = this.leads.id;
            this.leadForm.controls["price"].setValue(this.leads.price);
            this.leadForm.controls["warranty"].setValue(this.leads.warranty);
            this.leadForm.controls["serviceFrequency"].setValue(this.leads.serviceFrequency);
            this.leadForm.controls["callBack"].setValue(this.leads.callBack);
            this.leadForm.controls["callBackDate"].setValue(this.leads.callBackDate);
            this.leadForm.controls["callBackTime"].setValue(this.leads.callBackTime);
            this.leadForm.controls["callStatus"].setValue(this.leads.callStatus);
            this.leadForm.controls["followUpTask"].setValue(this.leads.followUpTask);
            this.leadForm.controls["result"].setValue(this.leads.result);
            this.leadForm.controls["quoteOrInvoice"].setValue(this.leads.quoteOrInvoice);
            this.callBackdate = new Date(this.leads.callBackDate).toISOString();
          }
        }
      });
    }

  }

  datepicker(event) {
    if (event.target.value == 'yes') {
      this.dateCheck = true;
    } else {
      this.dateCheck = false;
    }

  }

  submit(data) {
    let id = localStorage.getItem('newLeadId');
    localStorage.setItem('price', this.leadForm.value.price);
    let convertedData = this.leadForm.value;
    convertedData.createdLeadId = (this.leadId) ? this.leadId : id;
    convertedData.createdUserId = localStorage.getItem('id');
    console.log(convertedData);
    if (this.convertedLeadId) {
      this.leadService.updateConvertedLead(this.convertedLeadId, convertedData).subscribe((res: any) => {
        if (res.success) {
          localStorage.setItem("convertedLeadId", this.convertedLeadId);
          if (data == 'lead') {
            this.router.navigate(['/existing-lead']);
          }
        }
      });

    } else {
      console.log("else");
      this.leadService.convertLead(convertedData).subscribe((res: any) => {
        if (res.success) {
          localStorage.setItem("convertedLeadId", res.data.id);
          if (data == 'lead') {
            this.router.navigate(['/existing-lead']);
          }
        }
      });
    }

  }

}
