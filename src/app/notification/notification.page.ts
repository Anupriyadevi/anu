import { Component, OnInit } from '@angular/core';
import { LeadService } from '../service/lead.service'
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
 callBack: any=[];
  constructor(private leadService:LeadService) { }

  ngOnInit() {
  }

  
}
