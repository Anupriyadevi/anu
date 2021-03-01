import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../service/lead.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-completed-call-back',
  templateUrl: './completed-call-back.page.html',
  styleUrls: ['./completed-call-back.page.scss'],
})
export class CompletedCallBackPage implements OnInit {
  callBack: any = [];
  tabStatus;
  UserId = parseInt(localStorage.getItem('id'));
  logRole = localStorage.getItem('logRole');

  constructor(private leadService: LeadService, private router: Router, public activeRoute: ActivatedRoute,) { }

  ngOnInit() {

    this.callBackCalc();

  }


  callBackCalc() {
    let resp;
    this.leadService.getCalBackcompleted().subscribe((res: any) => {
      resp = res;
      if(this.logRole==='admin'){
        this.callBack = res.data;
        this.callBack.forEach(element => {
          if (element.callBackDate && new Date(element.callBackDate).toISOString().substring(0, 10) <= new Date().toISOString().substring(0, 10)) {
            //  if(element.callBackTime && new Date(element.callBackTime).getHours() == new Date().get)
            var date1, date2;
  
            date1 = new Date(element.callBackDate);
            // document.write(""+date1);
           date2 = new Date();
            // document.write("<br>"+date2);
  
            var res = Math.abs(date1 - date2) / 1000;
  
            // get total days between two dates
            var days = Math.floor(res / 86400);
            // document.write("<br>Difference (Days): "+days);                        
  
            // get hours        
            var hours = Math.floor(res / 3600) % 24;
            // document.write("<br>Difference (Hours): "+hours);  
  
            // get minutes
            var minutes = Math.floor(res / 60) % 60;
            // document.write("<br>Difference (Minutes): "+minutes);  
  
            // get seconds
            var seconds = res % 60;
            // document.write("<br>Difference (Seconds): "+seconds); 
  
            if (element.callBackDate && new Date(element.callBackDate).toISOString().substring(0, 10) == new Date().toISOString().substring(0, 10)) {
              if ((hours == 23 && minutes >= 45) || (hours == 0 && minutes <= 15)) {
                // this.callBack.push(element);
                element.redAlert = true;
              }
            } else {
              element.redAlert = true;
            }
          }
        });
      }
      else{
        this.callBack = res.data.filter(data => data.createdUserId === this.UserId);
        this.callBack.forEach(element => {
          if (element.callBackDate && new Date(element.callBackDate).toISOString().substring(0, 10) <= new Date().toISOString().substring(0, 10)) {
            //  if(element.callBackTime && new Date(element.callBackTime).getHours() == new Date().get)
            var date1, date2;
  
            date1 = new Date(element.callBackDate);
            // document.write(""+date1);
           date2 = new Date();
            // document.write("<br>"+date2);
  
            var res = Math.abs(date1 - date2) / 1000;
  
            // get total days between two dates
            var days = Math.floor(res / 86400);
            // document.write("<br>Difference (Days): "+days);                        
  
            // get hours        
            var hours = Math.floor(res / 3600) % 24;
            // document.write("<br>Difference (Hours): "+hours);  
  
            // get minutes
            var minutes = Math.floor(res / 60) % 60;
            // document.write("<br>Difference (Minutes): "+minutes);  
  
            // get seconds
            var seconds = res % 60;
            // document.write("<br>Difference (Seconds): "+seconds); 
  
            if (element.callBackDate && new Date(element.callBackDate).toISOString().substring(0, 10) == new Date().toISOString().substring(0, 10)) {
              if ((hours == 23 && minutes >= 45) || (hours == 0 && minutes <= 15)) {
                // this.callBack.push(element);
                element.redAlert = true;
              }
            } else {
              element.redAlert = true;
            }
          }
        });
      }
      });
    }
  }