import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LeadService } from '../service/lead.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  rate = 5;
  feedBackForm: any;
  id;
  UserId = localStorage.getItem('id');
  constructor(private router: Router, public activeRoute: ActivatedRoute, private _formBuilder: FormBuilder, public leadService: LeadService) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.queryParams.id;
    this.feedBackForm = this._formBuilder.group({
      customerName: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(10)]),
      rate: new FormControl(),
      satisfied: new FormControl(),
      accessibleManner: new FormControl(),
      problem: new FormControl(),
      satisfiedComments: new FormControl(),
      accessibleMannerComments: new FormControl(),
      problemComments: new FormControl(),
    });
    if (this.id) {
      this.leadService.getFeedbackWithid(this.id).subscribe((res: any) => {
        if (res.success) {
          this.feedBackForm.controls["customerName"].setValue(res.data[0].customerName);
          this.feedBackForm.controls["companyName"].setValue(res.data[0].companyName);
          this.feedBackForm.controls["email"].setValue(res.data[0].email);
          this.feedBackForm.controls["mobileNo"].setValue(res.data[0].mobileNo);
          this.feedBackForm.controls["rate"].setValue(res.data[0].rate);
          this.feedBackForm.controls["satisfied"].setValue(res.data[0].satisfied);
          this.feedBackForm.controls["accessibleManner"].setValue(res.data[0].accessibleManner);
          this.feedBackForm.controls["problem"].setValue(res.data[0].problem);
          this.feedBackForm.controls["satisfiedComments"].setValue(res.data[0].satisfiedComments);
          this.feedBackForm.controls["accessibleMannerComments"].setValue(res.data[0].accessibleMannerComments);
          this.feedBackForm.controls["problemComments"].setValue(res.data[0].problemComments);


        }
      });

    }
  }
  rates;
  submit() {
    this.rates = (this.feedBackForm.value.problem + this.feedBackForm.value.accessibleManner + this.feedBackForm.value.satisfied) / 3;
    this.feedBackForm.value.rate = this.rates;
    let feedbackdata = this.feedBackForm.value;
    feedbackdata.createdUserId = this.UserId;
    console.log(feedbackdata);
    this.leadService.addFeedback(feedbackdata).subscribe((res: any) => {
      this.feedBackForm.reset();
      this.router.navigate(['/dashboard']);
    })
  }

}
