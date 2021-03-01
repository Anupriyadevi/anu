import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule ,FormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { NotificationPage} from './notification/notification.page';
import { IonicRatingModule } from 'ionic4-rating';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { IonicTimepickerModule } from  '@logisticinfotech/ionic-timepicker';
@NgModule({
  declarations: [
    AppComponent,
    // IonTextAvatar,
    ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    Ionic4DatepickerModule,
    FormsModule,
    HttpClientModule,
    IonicRatingModule,
    IonicTimepickerModule,
    
  ],
  providers: [
    StatusBar,
    NotificationPage,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
