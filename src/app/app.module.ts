import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewsdetailsPage } from '../pages/newsdetails/newsdetails';
import { SearchPage } from '../pages/search/search';
import { SosPage } from '../pages/sos/sos';
import { EventPage } from '../pages/event/event';
import { FacePage } from '../pages/face/face';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { DataProvider } from '../providers/data/data';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { OneSignal } from '@ionic-native/onesignal';

import { HighlightPipe } from '../pipes/highlight/highlight';


@NgModule({
  declarations: [
    MyApp,
    HighlightPipe,
    AboutPage,
    ContactPage,
    HomePage,
    NewsdetailsPage,
    SearchPage,
    TabsPage,
    SosPage,
    EventPage,
    FacePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    NewsdetailsPage,
    SearchPage,
    TabsPage,
    SosPage,
    EventPage,
    FacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
