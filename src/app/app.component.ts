import { Component, OnInit } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NotificationPage } from './notification/notification.page';
import { Router} from '@angular/router';
import { LeadService } from './service/lead.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  login: boolean = false;
  public selectedIndex = 0;
  leadcall =true;
  
 
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },

    {
      title: 'Products',
      icon: 'cube',
      children: [
        {
          title: 'Breakers',
          url: '/product',
        },
        {
          title: 'Breakers Purchased',
          url: '/product-purchased',
        },
      ]
    },
    {
      title: 'Lead Management',
      icon: 'person-add',
      children: [
        {
          title: 'Create Lead',
          url: '/new-lead',
        },
        {
          title: 'Leads',
          url: '/existing-lead',
        },
      ]
    },
    {
      title: 'Customers',
      icon: 'people',
      children: [
        {
          title: 'Customers List',
          url: '/existing-customers',
        },
        {
          title: 'Customer Enquiry',
          url: '/customer-enquiry',
        },
      ]
    },
    {
      title: 'All Orders',
      url: '/orders',
      icon: 'cart'
    },
    {
      title: 'All service',
      icon: 'construct',
      children: [
        {
          title: 'Service History',
          url: '/service-history',
        },
        {
          title: 'Due for Service',
          url: '/service-due',
        },
      ]
    },
    {
      title: 'Callbacks',
      url: '/notification',
      icon: 'calendar'
    },
    {
      title: 'Feedback',
      icon: 'chatbubbles',
      children: [
        {
          title: 'Feedback list',
          url: '/feedback-list',
        },
        {
          title: 'Feedback',
          url: '/feedback',
        },
      ]
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'information-circle'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'call'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
      icon: 'warning'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'power'
    }
  ];
  public labels = [];
  subscribe: any;
  token: string;
  leads: any;
  name: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navController: NavController,
    public notificationPage: NotificationPage,
    private router : Router,
    private leadService : LeadService
  ) {
    this.initializeApp();
    this.subscribe= this.platform.backButton.subscribeWithPriority(6666,()=> {
      this.navController.back();
      
    })
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  funcall(url){
   //console.log(url);
   this.router.navigateByUrl;
  }
 
  ngOnInit() {
    this.name = sessionStorage.getItem('name');
    console.log(this.name);
  }
  
  checklogout(url) {
    if(url === '/login'){
    this.token = '';
    window.localStorage.removeItem('mean-token');
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/');
    
    }
}
ionViewWillEnter(){
  this.ngOnInit();
}
}
