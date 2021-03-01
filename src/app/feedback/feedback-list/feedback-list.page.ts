import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead.service'

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.page.html',
  styleUrls: ['./feedback-list.page.scss'],
})
export class FeedbackListPage implements OnInit {
  feedbacks;
  UserId = parseInt(localStorage.getItem('id'));
  logRole = localStorage.getItem('logRole');
  constructor(public leadService: LeadService) { }

  ngOnInit() {
    this.getFeedbacks();
  }

  getFeedbacks() {
    this.leadService.getFeedbacks().subscribe((res: any) => {
      if (res.success) {
        if(this.logRole ==='admin'){
        this.feedbacks = res.data;
        }
        else{
          this.feedbacks = res.data.filter(data => data.createdUserId === this.UserId);
        }
      }
    });
  }

}
